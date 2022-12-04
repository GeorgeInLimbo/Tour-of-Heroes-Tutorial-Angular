import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HosComponent } from './hos/hos.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HoDetailComponent } from './ho-detail/ho-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HoSearchComponent } from './ho-search/ho-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HosComponent,
    HoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HoSearchComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  bootstrap: [AppComponent],

})

export class AppModule { }