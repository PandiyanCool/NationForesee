import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService, DataService } from '../../shared/index';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location, private element: ElementRef, private authService: AuthService,
        private dataService: DataService,
        private cookieService: CookieService,
        private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    logout() {
        this.cookieService.delete('authCookie');
        this.router.navigate(['login']);

        // this.authService.logoutUser().subscribe(x => {

        //     if (x.Username !== '') {
        //         this.authService.setUser(x);
        //         console.log(x.Username);
        //         this.cookieService.set('authCookie', x.Username);

        //         this.router.navigate(['login']);
        //     }
        // }, (err: HttpErrorResponse) => {
        //     // this.isLoading = false;

        //     // let httpError = (typeof (err.error) === 'string') ? JSON.parse(err.error) : err.error;

        //     // if (httpError && httpError.message) {
        //     //     // this.notificationsService.error(httpError.message, httpError.errorType);
        //     // } else {
        //     //     // this.notificationsService.error('Internal server error');
        //     //     console.log(`Backend returned code ${httpError.status}, body was: ${httpError}`);
        //     // }
        // });
    }

    sidebarOpen() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        // setTimeout(function(){
        //     toggleButton.classList.add('toggled');
        // }, 500);
        // body.classList.add('nav-open');

        // this.sidebarVisible = true;
    };
    sidebarClose() {
        // const body = document.getElementsByTagName('body')[0];
        // this.toggleButton.classList.remove('toggled');
        // this.sidebarVisible = false;
        // body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        // if (this.sidebarVisible === false) {
        //     this.sidebarOpen();
        // } else {
        //     this.sidebarClose();
        // }
    };

    getTitle() {
        //   var titlee = this.location.prepareExternalUrl(this.location.path());
        //   if(titlee.charAt(0) === '#'){
        //       titlee = titlee.slice( 2 );
        //   }
        //   titlee = titlee.split('/').pop();

        //   for(var item = 0; item < this.listTitles.length; item++){
        //       if(this.listTitles[item].path === titlee){
        //           return this.listTitles[item].title;
        //       }
        //   }
        //   return 'Dashboard';
    }
}
