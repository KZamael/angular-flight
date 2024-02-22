import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { SearchComponent } from './pages/website/search/search.component';
import { BookingFlightComponent } from './pages/website/booking-flight/booking-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    NewFlightComponent,
    SearchComponent,
    BookingFlightComponent,
    MyBookingsComponent,
    WebsiteLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
