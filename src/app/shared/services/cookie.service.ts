import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CookieProvider {
    constructor(private cookieService: CookieService) { }

    /*
     cookieLifetime represents the number of minutes the cookie will last.
     If not provided, the cookie will be destroyed when the browser gets closed
    */
    public saveCookie(cookieName: string, cookieData: any, cookieLifetime?: number) {
        let expiryDate: Date;

        if (cookieLifetime) {
            expiryDate = this.getCookieExpiryDate(cookieLifetime);
        }
        this.cookieService.put(cookieName, JSON.stringify(cookieData), { expires: expiryDate });
    }

    public getCookie(cookieName: string) {
        let cookie = this.cookieService.get(cookieName);

        if (this.isJSONString(cookie)) {
            return JSON.parse(cookie);
        } else {
            return cookie;
        }
    }

    public deleteCookie(cookieName: string) {
        this.cookieService.remove(cookieName);
    }

    private getCookieExpiryDate(minutes: number) {
        return new Date(new Date().getTime() + 60000 * minutes);
    }

    private isJSONString(string: string) {
        try {
            let o = JSON.parse(string);

            if (o && typeof o === 'object') {
                return true;
            }
        } catch (e) { return false; }

        return false;
    };
}
