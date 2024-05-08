import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsPartnersListComponent } from './campaigns-partners-list.component';

describe('CampaignsPartnersListComponent', () => {
  let component: CampaignsPartnersListComponent;
  let fixture: ComponentFixture<CampaignsPartnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsPartnersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsPartnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
