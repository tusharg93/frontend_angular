
import { NgModule } from '@angular/core';
import { ImageComponent } from '../components/image.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImageCropperComponent,ImageComponent
    ],

    exports:[ImageCropperComponent,ImageComponent,CommonModule],
})
export class ImageModule{ }

