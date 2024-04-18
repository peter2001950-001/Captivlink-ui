import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesEditComponent } from './websites-edit.component';

describe('WebsitesEditComponent', () => {
  let component: WebsitesEditComponent;
  let fixture: ComponentFixture<WebsitesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
