import { Injectable } from '@angular/core';
import { DataService } from './data.service';
// import { CookieProvider } from './cookie.service';
import { IUserCredentials, IUser, IProductSalesReport, AUTH_COOKIE } from '../index';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    constructor(private dataService: DataService, private cookieService: CookieService) { }

    loginUser(userCredentials: IUserCredentials): Observable<IUser> {
        const result = this.dataService.loginUser(userCredentials);
        return result;
    }

    getData(): Observable<IProductSalesReport> {
        const result = this.dataService.getProductList();
        return result;
    }

    updateVendor(vendorDetails: string): Observable<string> {
        return this.dataService.updateVendor(vendorDetails);
    }

    logoutUser() {
        return this.dataService.logoutUser();
    }

    setUser(user: IUser) {
        this.dataService.setUserData(user);
    }

    public isAuthenticated(): boolean {

        const authCookie = this.cookieService.get('authCookie');

        // Check whether the token is expired and return
        // true or false
        return true;
    }
}

