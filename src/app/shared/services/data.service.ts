import { IUser, IUserCredentials, IProductSalesReport } from '../index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Global from '../global.config';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private baseURL = Global.AmazonSellingManager[Global.AmazonSellingManager.env].endPoint;


    public userData: IUser = {
        accessToken: '',
        email: '',
        firstName: '',
        Username: '',
    };

    /**
     * Authentication status.  Can be subscribed to by Service users.
     *
     * @private
     * @memberof DataService
     */
    private isAuthenticated = new BehaviorSubject<boolean>(false);
    authenticationMessage = this.isAuthenticated.asObservable();

    constructor(private http: HttpClient) {
    }


    setUserData(userData: IUser) {
        this.userData = userData;
        console.log(userData);
        this.isAuthenticated.next(userData !== null);
    }


    loginUser(userCredentials: IUserCredentials): Observable<IUser> {

        const headers = new HttpHeaders();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Timeout', '20000000');
        // let options = new RequestOptions({ headers: headers });

        // return new Promise<IUser>((resolve, reject) => {

        //     const data;
        //       resolve(data);

        //   });
        const userData: IUser = {
            firstName: 'admin',
            Username: 'admin',
            accessToken: '',
            email: ''
        };


        return this.httpPost(`${this.baseURL}/user/login`, userCredentials, headers)
            .map((res: any) => {
                // this.setUserData(res);
                return res;
            }).catch(e => {
                return Observable.throw(e);
            });

    }


    logoutUser(): any {
        return this.httpPost(`${this.baseURL}/user/logout`, null, null)
            .map(data => {
                return data;
            });
    }

    getProductList(): Observable<IProductSalesReport> {
        return this.httpGet(`${this.baseURL}/productsalesreport/productlist`)
            .map(data => {
                return data;
            });
    }

    updateVendor(vendorDetails: string): Observable<string> {
        const headers = new HttpHeaders();
        /** No need to include Content-Type in Angular 4 */
        const vendorParam = {
            'VendorCode': vendorDetails
        };

        return this.httpPost(`${this.baseURL}/ProductSalesReport/UpdateContainerRecord/`, vendorParam, headers)
            .map(res => {
                return res;
            });
    }



    httpGet<T>(url: string): Observable<any> {
        const options = { headers: this.getHeader() };
        return this.http.get(url);
    }

    httpPost<T>(url: string, body: any, headers: any): Observable<any> {
        const options = { headers: this.getHeader() };

        return this.http.post(url, body);
    }

    httpDelete<T>(url: string): Observable<any> {
        const options = { headers: this.getHeader() };
        return this.http.delete(url, options);
    }

    private getHeader(): HttpHeaders {
        if (this.isAuthenticated.value) {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userData.accessToken,
                // 'organisation_code': this.userData.organizationCode,
                'Accept': 'application/json'
            });
        } else {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Headers': 'Content-Type',
                // 'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Origin': '*'
            });
        }
    }

}
