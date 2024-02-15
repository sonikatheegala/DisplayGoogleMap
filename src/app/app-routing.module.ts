import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GpsComponent } from "./gps/gps.component";
const routes: Routes = [];

@NgModule({
  imports:  [
    RouterModule.forRoot([
      { path: 'gps', component: GpsComponent },
      { path: '', component: GpsComponent },
      //{ path: '',   redirectTo: '/gps', pathMatch: 'full' },
      { path: "**", component: GpsComponent },
        // { path: '', component: AppMainComponent,
        // { path: '**', redirectTo: ''},
    ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
