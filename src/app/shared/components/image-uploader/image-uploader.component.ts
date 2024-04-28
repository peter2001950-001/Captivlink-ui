import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as LR from '@uploadcare/blocks';
import { OutputFileEntry } from '@uploadcare/blocks';
import { DialogService } from 'primeng/dynamicdialog';
import { ImagePopupViewerComponent } from '../image-popup-viewer/image-popup-viewer.component';

LR.registerBlocks(LR);

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true
    }
  ]
})
export class ImageUploaderComponent implements ControlValueAccessor {

  constructor(public dynamicDialog: DialogService){}

  isDisabled : boolean = false;
  writeValue(obj: any): void {
    if(obj){
      for (const key in obj) {
        this.ctxProviderRef.nativeElement.addFileFromCdnUrl(obj[key]);
      }
    }
  }
  registerOnChange(fn: any): void {
    this.filesChange.subscribe(fn)
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
   this.isDisabled = isDisabled;
  }

  @Output() filesChange = new EventEmitter<string[]>();

  uploadedFiles: OutputFileEntry<'success'>[] = [];
  @ViewChild('ctxProvider', { static: true }) ctxProviderRef!: ElementRef<
    InstanceType<LR.UploadCtxProvider>
  >;


  ngOnInit() {

    this.ctxProviderRef.nativeElement.addEventListener(
      'change',
      this.handleChangeEvent
    );
    this.ctxProviderRef.nativeElement.addEventListener(
      'modal-close',
      this.handleModalCloseEvent
    );
  }

  ngOnDestroy() {
    /*
      Note: We're resetting styles here just to be sure they do not affect other examples.
      You probably do not need to do it in your app.
     */
    LR.FileUploaderRegular.shadowStyles = '';

    this.ctxProviderRef.nativeElement.removeEventListener('change', this.handleChangeEvent);
    this.ctxProviderRef.nativeElement.removeEventListener('modal-close', this.handleModalCloseEvent);
  }

  resetUploaderState() {
    this.ctxProviderRef.nativeElement.uploadCollection.clearAll();

  }

  handleRemoveClick(internalId: string) {
    this.ctxProviderRef.nativeElement.removeFileByInternalId(internalId);
  }

  handleChangeEvent = (e: LR.EventMap['change']) => {
    this.uploadedFiles = e.detail.allEntries.filter(f => f.status === 'success') as OutputFileEntry<'success'>[];
    this.filesChange.emit(e.detail.allEntries.filter(f => f.status === 'success').flatMap(x=> x.cdnUrl as string))
  };

  handleModalCloseEvent = () => {
    //this.resetUploaderState();

    // this.filesChange.emit([...this.files, ...this.uploadedFiles]);
    // this.uploadedFiles = [];
  };

  imageClick(imageUrl: any){
    this.dynamicDialog.open(ImagePopupViewerComponent, {
          header: 'Image preview',
          width: '80vw',
          data: imageUrl,
        });
  }
}
