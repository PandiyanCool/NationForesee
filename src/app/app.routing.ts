import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { FutureComponent } from './future/future.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent, pathMatch: 'full' },
  { path: 'reports', component: TypographyComponent , pathMatch: 'full'},
  { path: 'future', component: FutureComponent , pathMatch: 'full'},
  // { path: 'icons', component: IconsComponent },
  // { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  // { path: 'upgrade', component: UpgradeComponent },
  { path: '', redirectTo: 'table-list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
