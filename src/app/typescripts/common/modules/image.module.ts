/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule } from '@angular/core';
import { ImageComponent } from '../components/image.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { CommonModule } from '@angular/common';
import { ImageUploadDirective } from './../../directive/image-upload.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImageCropperComponent,ImageComponent,ImageUploadDirective
    ],

    exports:[ImageCropperComponent,ImageComponent,CommonModule,ImageUploadDirective],
})
export class ImageModule{ }

