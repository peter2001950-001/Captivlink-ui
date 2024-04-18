import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesCreateComponent } from './websites-create.component';

describe('WebsitesCreateComponent', () => {
  let component: WebsitesCreateComponent;
  let fixture: ComponentFixture<WebsitesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
