import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksSelectComponent } from './social-links-select.component';

describe('SocialLinksSelectComponent', () => {
  let component: SocialLinksSelectComponent;
  let fixture: ComponentFixture<SocialLinksSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinksSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
