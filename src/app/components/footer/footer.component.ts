import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, DataService } from '../../shared/index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor(private dataService: DataService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.cookieService.delete('authCookie');
    this.router.navigate(['login']);
  }

}
