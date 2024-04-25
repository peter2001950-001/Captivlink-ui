import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePopupViewerComponent } from './image-popup-viewer.component';

describe('ImagePopupViewerComponent', () => {
  let component: ImagePopupViewerComponent;
  let fixture: ComponentFixture<ImagePopupViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePopupViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePopupViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
