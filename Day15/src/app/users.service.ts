import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  user: any = [];
  detail: any = {};

  img = null;
  getServerData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  putData(): Observable<any> {
    return this.http.post('https://api.cloudinary.com/v1_1/dwkmluado/image/upload', this.img);
  }

}
    //  name:"kishore",
    //  password:"kshr"


    //   });
  // }









// https://reqres.in/api/users