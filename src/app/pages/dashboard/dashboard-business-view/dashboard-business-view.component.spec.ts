import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBusinessViewComponent } from './dashboard-business-view.component';

describe('DashboardBusinessViewComponent', () => {
  let component: DashboardBusinessViewComponent;
  let fixture: ComponentFixture<DashboardBusinessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBusinessViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBusinessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
