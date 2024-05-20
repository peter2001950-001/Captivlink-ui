import { map, min } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaigns/campaign.service';

@Component({
  selector: 'app-campaigns-performance',
  templateUrl: './campaigns-performance.component.html',
  styleUrls: ['./campaigns-performance.component.scss']
})
export class CampaignsPerformanceComponent implements OnInit {


  constructor(private svc: CampaignService){}

  items : Array<any> = [];
  totalCount: number = 0;
  first: number = 0;
  rowsPerPage : number = 10;

  ngOnInit(): void {
    this.fetchData();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
     this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        min: 0
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
  }

  @Input() campaignId?: string;
  rangeDates : Date[] = [this.addDays(new Date(), -7), new Date()];
  data?: any;
  clicksChart?: any;
  purchaseChart?: any;
  purchaseValueChart?: any;
  options: any;

  addDays(date: Date, days: number) : Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  fetchData(){

    const documentStyle = getComputedStyle(document.documentElement);
    if(!this.campaignId) return;
    var params = new HttpParams();
    params = params.append("startTime", this.rangeDates[0].toISOString());
    params = params.append("endTime", this.addDays(this.rangeDates[1], 1).toISOString());

    this.svc.getCampaignPerformance(this.campaignId, params).then((data)=>{
      this.data = data;
      this.clicksChart = this.mapDataToChartModel(data.clickData, "Link clicks", documentStyle.getPropertyValue('--blue-500') );
      this.purchaseChart = this.mapDataToChartModel(data.purchaseData, "Purchases", documentStyle.getPropertyValue('--green-500') );
      this.purchaseValueChart = this.mapDataToChartModel(data.purchaseValueData, "Total purchase value in EUR", documentStyle.getPropertyValue('--yellow-500') );
    });
    this.first = 0;
    this.fetchCreatorData();
  }

  changedDates(){
    this.fetchData();
  }

  fetchCreatorData(){
    if(this.campaignId == null) return;

    var params = new HttpParams();
    params = params.append("startAt", this.first);
    params = params.append("count", this.rowsPerPage);
    params = params.append("startTime", this.rangeDates[0].toISOString());
    params = params.append("endTime", this.addDays(this.rangeDates[1], 1).toISOString());

    this.svc.getCampaignPartnersPerformance(this.campaignId, params).then(res=>{
      this.items = res.data;
      this.totalCount = res.totalCount
    })
  }
  paginate(event:any){
      this.first = event.first;
      this.rowsPerPage = event.rows;
      this.fetchCreatorData();
  }


  mapDataToChartModel(data: any, label: string, color: any){
    const documentStyle = getComputedStyle(document.documentElement);
    var labels = data.labels.map((x: string) => new Date(x).toLocaleDateString());
    return {
      labels: labels,
      datasets:[{
        label: label,
        data: data.values,
        fill: false,
        borderColor: color,
        tension: 0.4
    },]
    }
  }




}
