import { Component, NgZone, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

import { UsersService } from './users.service';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  // img = null;

  private hasBaseDropZoneOver: boolean = false;
  public uploader: any;
  private title: any;
  imgUrl: any = 'https://res.cloudinary.com/dwkmluado/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,h_160,w_422/v1623735583/sample.jpg';
  imageToShow: any;
  isImageLoading: any;

  constructor(
    private http: HttpClient,
    private userservice: UsersService,
    private cloudinary: Cloudinary,
    private zone: NgZone) {
    this.title = 'bird';
  }

  ngOnInit(): void {
    const uploaderOptions: FileUploaderOptions = {
      url: ' https://api.cloudinary.com/v1_1/dwkmluado/image/upload',
      autoUpload: true,
      isHTML5: true,
      removeAfterUpload: true,

      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]

    };


    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      form.append('upload_preset', 'ny2xgsoh');
      form.append('file', fileItem);
      fileItem.withCredentials = false;
      return { fileItem, form };
    };
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }



  upload() {

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.userservice.getImage(this.imgUrl).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }


}

// select(event: any) {
//   console.log(event);
//   this.img = event;
//   this.userservice.img = this.img;

// }}

// upload() {
//   this.userservice.putData().subscribe(data => {
//     console.log(data);
//   }
// }

  // cl = new Cloudinary({ cloud_name: "dwkmluado", secure: true });


