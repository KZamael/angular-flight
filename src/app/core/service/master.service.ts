import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private FLIGHT_BOOKING: string = "https://freeapi.gerasim.in/api/FlightBooking/";

  constructor(private http: HttpClient) { }

  getAllAirport() {
    return this.http.get(this.FLIGHT_BOOKING + 'GetAllAirport');
  }

  saveAirport(airportList: any) {
    return this.http.post(this.FLIGHT_BOOKING + 'AddUpdateBulkAirports',airportList );
  }

  getAllCity() {
    return this.http.get(this.FLIGHT_BOOKING + 'GetAllCity');
  }

  getAllFlights() {
    return this.http.get(this.FLIGHT_BOOKING + "GetAllFlights");
  }

  createFlight(flights: any) {
    return this.http.post(this.FLIGHT_BOOKING + 'AddUpdateBulkFlights',flights );
  }

  searchFlight(departureAirportId: number,arrivalAirportId:number,travelDate: string) {
    return this.http.get("https://freeapi.gerasim.in/api/FlightBooking/SearchFlight?departureAirportId="+departureAirportId+"&arrivalAirportId="+arrivalAirportId+"&dateOfTravel="+travelDate);
  }

  register(flights: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/register", flights);
  }

  login(login: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/login", login);
  }

  bookTicket(flights: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/bookticket",flights );
  }

}
