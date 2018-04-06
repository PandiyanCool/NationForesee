import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import * as Global from '../shared/global.config';
declare var $: any;

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  private baseURL = Global.AmazonSellingManager[Global.AmazonSellingManager.env].endPoint;
  data: Object;
  loading: boolean;
  name: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  showNotification(from, align, info) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    console.log(info);

    const status = info === 'success' ? 'File Processed succesfully' : 'Problem occurred while processing files';

    $.notify({
      icon: 'notifications',
      message: status

    }, {
        type: info,
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }

  public fileChange(event) {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {

      const file: File = fileList[0];

      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      const headers = new HttpHeaders();

      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'POST');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Timeout', '20000000');

      this.http.post(`${this.baseURL}/upload/processproductsheet/`, formData, { headers: headers })
        .subscribe((res) => {
          console.log(res);
          // this.data = res;
          // this.loading = false;
          this.showNotification('bottom', 'right', 'success');
        }, err => { this.showNotification('bottom', 'right', 'warning'); });
    }
  }

  public fileContainerChange(event) {
    const fileList02: FileList = event.target.files;
    if (fileList02.length > 0) {
      const file02: File = fileList02[0];
      const formData02: FormData = new FormData();
      formData02.append('uploadFile', file02, file02.name);
      const headers02 = new HttpHeaders();
      /** No need to include Content-Type in Angular 4 */
      headers02.append('Content-Type', 'multipart/form-data');
      headers02.append('Accept', 'application/json');
      headers02.append('Access-Control-Allow-Headers', 'Content-Type');
      headers02.append('Access-Control-Allow-Methods', 'POST');
      headers02.append('Access-Control-Allow-Origin', '*');
      // let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.baseURL}/upload/processcontainersheet/`, formData02, { headers: headers02 })
        .subscribe((res) => {
          console.log(res);
          // this.data = res;
          // this.loading = false;
          this.showNotification('bottom', 'right', 'success');
        }, err => { this.showNotification('bottom', 'right', 'warning'); });
    }
  }

}
