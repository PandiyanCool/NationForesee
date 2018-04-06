import { sampleProducts } from './products';
import { process, State } from '@progress/kendo-data-query';
import { AuthService, DataService, IUser } from '../shared/index';

import { Component, OnInit } from '@angular/core';
// import {
//   GridComponent,
//   GridDataResult,
//   DataStateChangeEvent,
//   PageChangeEvent
// } from '@progress/kendo-angular-grid';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
declare var $: any;

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styles: [`.table > thead > tr > th{    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
}

.table > thead > tr > th {
    border-bottom-width: 1px;
    font-size: 1em;
    font-weight: 300;
    border-right: none;
    border-left: none;
}

.table > tbody > tr > td {
  border-right: none;
  border-left: none;
}
.card .table tr:first-child td {
  border-top: none;
}

.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
}
th {
    text-align: left;
}`

  ]
})
export class TypographyComponent implements OnInit {
  public gridView;
  public overallProduct;
  public currentProduct;
  public landCost;
  public fBACost;
  public sellingPrice = 0;
  public gstPercentage = 0;
  public profit = 0;
  public gstPayable = 0;
  public CommonExpensive = 25;
  public vendorCode = 0;
  public vendorCount = 0;

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'SKUID', operator: 'contains', value: '' }]
    }
  };

  loadData() {
    this.gridView = process(this.overallProduct, this.state);
  }

  activateClass(product) {
    this.currentProduct = product;
    this.landCost = product.LandCost;
    this.fBACost = product.FBACost;
  }

  showNotification(from, align, info) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    console.log(info);

    const status = info === 'success' ? 'Records updated successfully'
      : 'Problem occurred while updating records';

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



  // public dataStateChange(state: DataStateChangeEvent): void {
  //   this.state = state;
  //   this.gridView = process(this.overallProduct, this.state);
  // }

  public updateVendor(id: any, count: any, edd: any) {
    console.table(id.value, count.value, edd.value);
    const vendorDetails = `${id.value}|${count.value}|${edd.value}`;
    this.authService.updateVendor(vendorDetails).subscribe(x => {
      console.log('update!');
      this.showNotification('bottom', 'right', 'success');
    }, err => {
      this.showNotification('bottom', 'right', 'warning');
    });
  }

  public onInputChange() {

    this.gstPayable = Math.round(((Number(this.sellingPrice) * Number(this.gstPercentage)) /
      (100 + Number(this.gstPercentage))) - (((Number(this.landCost) * 0.18) + (Number(this.fBACost) * 0.18))));

    this.profit = Math.round((Number(this.sellingPrice)) - (Number(this.CommonExpensive) + Number(this.landCost) + Number(this.fBACost) +
      ((Number(this.sellingPrice) * Number(this.gstPercentage)) / (100 + Number(this.gstPercentage)))));



  }


  constructor(private dataService: DataService, private authService: AuthService) {
  }


  ngOnInit() {
    this.overallProduct = sampleProducts;
    this.currentProduct = this.overallProduct[0];
    this.landCost = this.overallProduct[0].LandCost;
    this.fBACost = this.overallProduct[0].FBACost;

    // TODO: uncomment on live

    // this.authService.getData().subscribe(x => {
    //   this.overallProduct = x;
    //   this.currentProduct = this.overallProduct[0];
    //   this.landCost = this.overallProduct[0].LandCost;
    //   this.fBACost = this.overallProduct[0].FBACost;
    // });
  }
}

