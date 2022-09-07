import { Component } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  x: any;

  constructor(private http: HttpClient) {

  }

  fileUpload(files: any) {
    this.x = files.item(0);
    console.log(this.x)
  }

  confirm() {
    const endpoint = 'http://localhost:4200/api/v1/rest/upload';
    // const formData: FormData = new FormData();
    // formData.append("reportProgress", true as any);
    // formData.append('file', this.x);

    const formData = new FormData();
    formData.append('file', this.x, this.x.name);
    // const req = new HttpRequest('POST', endpoint, formData, {
    //   reportProgress: true
    // });
    // this.http.request(req).subscribe(next => {
    //   console.log(next);
    // });

    return this.http
      .post(endpoint, formData)
      .subscribe(next => {
        console.log(next);
      });

  }
}
