
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TypographyModule } from './typography/typography.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TypographyComponent } from './typography/typography.component';
import { FutureComponent } from './future/future.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService, AuthService } from './shared';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent,
    FutureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    TypographyModule
  ],
  providers: [AuthService, DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
