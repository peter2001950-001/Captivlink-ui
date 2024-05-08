import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorDetailsComponent } from './content-creator-details.component';

describe('ContentCreatorDetailsComponent', () => {
  let component: ContentCreatorDetailsComponent;
  let fixture: ComponentFixture<ContentCreatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCreatorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCreatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
