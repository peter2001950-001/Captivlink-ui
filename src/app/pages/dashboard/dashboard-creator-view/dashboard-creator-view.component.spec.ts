import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreatorViewComponent } from './dashboard-creator-view.component';

describe('DashboardCreatorViewComponent', () => {
  let component: DashboardCreatorViewComponent;
  let fixture: ComponentFixture<DashboardCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCreatorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
