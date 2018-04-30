import { Component, OnInit, Output , EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { ApiService } from './../services/api.service';
declare var showId:any;
declare var hideId:any;
declare var window:any;
declare var $:any;
import { StorageService } from './../services/storage.service';

@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'image-tee',
  template: `
  <div class="ovrlay" id="ImgCrop" style="display:none;    margin-left: 30%;">
    <div class="overlay-close" onclick="hideId('ImgCrop');" style="float: right;font-size: 40px;">X</div>
    <div class="crop-image-div">
        <div class="cropArea">
            <div>
                <img-cropper #cropper [image]="data" [settings]="cropperSettings1"></img-cropper><br>
            </div>
             <a href="javascript:void(0)" (click)="uploadPic()" style="margin-left: 45%;" >UPLOAD</a>
        </div>
       
    </div>
</div>

`,
  providers:[ApiService,StorageService]
})
export class ImageComponent implements OnInit {
  environment:any;
  division:string;
  name:string;
  data:any;
  cropperSettings1:CropperSettings;
  croppedWidth:number;
  croppedHeight:number;
  imageSize:any;  
  formatType:number;
  fileData:any;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  @Output() updateImage: EventEmitter<any> = new EventEmitter();
  constructor(private ApiService:ApiService, private _storage:StorageService) {
    this.environment = environment;
    this.imageSize = [{height:500, width:500,canvasWidth:800,canvasHeight:800,rounded:true}];
    this.setFormat(0);
  }

  ngOnInit() {
    this.data = {};
  }

  setFormat(type){
     
    this.formatType = type;
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.noFileInput = true;
    this.cropperSettings1.width = this.imageSize[this.formatType].width;
    this.cropperSettings1.height = this.imageSize[this.formatType].height;

    this.cropperSettings1.croppedWidth = this.imageSize[this.formatType].width;
    this.cropperSettings1.croppedHeight = this.imageSize[this.formatType].height;

    this.cropperSettings1.canvasWidth = this.imageSize[this.formatType].canvasWidth;
    this.cropperSettings1.canvasHeight = this.imageSize[this.formatType].canvasHeight;

    this.cropperSettings1.minWidth = this.imageSize[this.formatType].width;
    this.cropperSettings1.minHeight = this.imageSize[this.formatType].height;

    this.cropperSettings1.rounded =  false;
    this.cropperSettings1.keepAspect = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

  }

  cropped(bounds:Bounds) {
    this.croppedHeight =bounds.bottom-bounds.top;
    this.croppedWidth = bounds.right-bounds.left;
  }

  fileChangeListener($event) {

    if($event.target.files[0] && $event.target.files[0].type.match(/image/gi) && $event.target.files[0].type.match(/jpg|png|jpeg/gi)){
      var img = new Image();
      img.src = window.URL.createObjectURL($event.target.files[0]);
      var _self = this;
      img.addEventListener('load', function(){
        if(this.naturalWidth >= _self.imageSize[_self.formatType].width && this.naturalHeight >= _self.imageSize[_self.formatType].height){
          var image:any = new Image();
          $('#ImgCrop').css('display','block');
          var file:File = $event.target.files[0];
          _self.name = $event.target.files[0].name;
          _self.fileData = $event.target.files[0];
          var myReader:FileReader = new FileReader();
          var that = this;
          // this.sendReq($event.target.files[0])
          myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            _self.cropper.setImage(image);

          };
          myReader.readAsDataURL(file);


        } else{

            alert("Please upload image with minimum width of "+_self.imageSize[_self.formatType].width+ " pixel ")

        }

      });

    }else{
      //console.log('3')
       this._storage.showMessage('Please choose an image file','failure');
     
    }
   
  }

  uploadPic(){
    var arr = this.data.image.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    var newFile:File = this.fileData;
    try {
      newFile= new File ([u8arr], this.name, {type:mime});
    }
    catch(e) {
       this._storage.showMessage('Your browser does not support cropping','failure');
     
    }
    this.sendReq(newFile);
  }

  sendReq(file){
    var fileData = new FormData();
    fileData.append('image', file);
    fileData.append('key', this.name);
    let link = '/api/v1/forms/image';
    if(this.environment.random.source =='vendor'){
      link = '/api/v1/vendors/image'
    }
    this.ApiService.imageApi(link,fileData).then((value)=>{
      if(value && value['data'] && value['data'] && value['data']){
        $('#ImgCrop').css('display','none');
        // $('#logoImg').attr('src',value['data']['url'])
        this.updateImage.emit(value['data']['url']);

      }else{
        
        // this._storage.showMessage(value['reason'],'failure');
      }
      hideId('photoLoader');
    });
  }
}
