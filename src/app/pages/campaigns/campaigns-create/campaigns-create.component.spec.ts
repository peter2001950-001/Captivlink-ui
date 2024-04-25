import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsCreateComponent } from './campaigns-create.component';

describe('CampaignsCreateComponent', () => {
  let component: CampaignsCreateComponent;
  let fixture: ComponentFixture<CampaignsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
