import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFeedComponent } from './campaign-feed.component';

describe('CampaignFeedComponent', () => {
  let component: CampaignFeedComponent;
  let fixture: ComponentFixture<CampaignFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
