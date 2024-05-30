import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPerformanceViewComponent } from './campaign-performance-view.component';

describe('CampaignPerformanceViewComponent', () => {
  let component: CampaignPerformanceViewComponent;
  let fixture: ComponentFixture<CampaignPerformanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPerformanceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPerformanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
