import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { BaseModule } from './base/base.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from './shared/datasharing.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    NgbModule.forRoot(),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DataSharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
