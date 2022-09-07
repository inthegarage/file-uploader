import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  file: any;

  constructor(private http: HttpClient) {

  }

  fileUpload(files: any) {
    this.file = files.item(0);
    console.log(this.file)
  }

  confirm() {
    const endpoint = 'http://localhost:4200/api/v1/rest/upload';

    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    return this.http
      .post(endpoint, formData)
      .subscribe(next => {
        console.log(next);
      });

  }
}
