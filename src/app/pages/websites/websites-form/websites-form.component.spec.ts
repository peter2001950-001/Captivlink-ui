import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesFormComponent } from './websites-form.component';

describe('WebsitesFormComponent', () => {
  let component: WebsitesFormComponent;
  let fixture: ComponentFixture<WebsitesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
