import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService, DataService, IUserCredentials, AUTH_COOKIE } from '../shared/index';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from 'app/shared/models/login.model';
declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    formInvalid = false;
    isLoading = false;
    constructor(private router: Router,
        private authService: AuthService,
        private dataService: DataService,
        private cookieService: CookieService) { }

    ngOnInit() { }

    showNotification(from, align, info) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        console.log(info);

        const status = info === 'success' ? 'Login Successful' : 'Login Failed! Please, Check your credentials.';

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

    loginUser(formValues: any) {
        this.formInvalid = !formValues.userName || !formValues.password;
        if (this.formInvalid) { return; }

        const userCredentials: IUserCredentials = {
            password: formValues.password,
            userName: formValues.userName
        };

        this.isLoading = true;


        const userData: IUser = {
            firstName: 'admin',
            Username: 'admin',
            accessToken: '',
            email: ''
        };

        if (userCredentials.userName.toLowerCase() === 'admin'
            && userCredentials.password.toLowerCase() === 'password') {
            this.authService.setUser(userData);
            console.log(userData.Username);
            this.cookieService.set('authCookie', userData.Username);
            this.showNotification('bottom', 'right', 'success');
            this.router.navigate(['table-list']);
        }


        // TODO: Mock login data

        // this.authService.loginUser(userCredentials).subscribe(x => {
        //     this.isLoading = false;

        //     if (x.Username !== '') {
        //         this.authService.setUser(x);
        //         console.log(x.Username);
        //         this.cookieService.set('authCookie', x.Username);
        //         this.showNotification('bottom', 'right', 'success');
        //         this.router.navigate(['table-list']);
        //     }
        // }, (err: HttpErrorResponse) => {
        //     this.isLoading = false;
        //     console.log(err);
        //     this.showNotification('bottom', 'right', 'warning');
        // });
    }
}
