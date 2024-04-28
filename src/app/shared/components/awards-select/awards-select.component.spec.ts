import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsSelectComponent } from './awards-select.component';

describe('AwardsSelectComponent', () => {
  let component: AwardsSelectComponent;
  let fixture: ComponentFixture<AwardsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
