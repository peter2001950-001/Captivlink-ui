import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsPerformanceComponent } from './campaigns-performance.component';

describe('CampaignsPerformanceComponent', () => {
  let component: CampaignsPerformanceComponent;
  let fixture: ComponentFixture<CampaignsPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
