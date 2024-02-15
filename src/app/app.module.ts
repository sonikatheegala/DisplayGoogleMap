import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { GpsComponent } from './gps/gps.component';

import {HttputilityService} from './httputility.service';
import {GPSService} from './gps.service';

@NgModule({
  declarations: [
    AppComponent,
    GpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ""//Google Map API Key
    })
  ],
  providers: [ GPSService,HttputilityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
