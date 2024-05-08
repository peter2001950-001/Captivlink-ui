import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPartnershipListComponent } from './campaign-partnership-list.component';

describe('CampaignPartnershipListComponent', () => {
  let component: CampaignPartnershipListComponent;
  let fixture: ComponentFixture<CampaignPartnershipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPartnershipListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPartnershipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
