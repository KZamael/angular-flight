import { Component, OnInit } from '@angular/core';
import {MasterService} from "../../../core/service/master.service";

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit {

  airportList: any [] = [];
  flightObj: any = {
    "flightId": 0,
    "flightNumber": "",
    "departureAirportId": 0,
    "departureTime": "",
    "arrivalAirportId": 0,
    "arrivalTime": "",
    "price": 0,
    "totalSeats": 0,
    "flightVendorId": 0,
    "travelDate": ""
  }
  constructor(private master: MasterService) {
    const localData = localStorage.getItem("FlightUser");
    if (localData !== null) {
      this.flightObj.flightVendorId = JSON.parse(localData);
    }
  }

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports() {
    this.master.getAllAirport().subscribe((res:any)=> {
      this.airportList = res.data;
    });
  }

  onSaveFlight() {
    const obj = [

    ];
    obj.push(this.flightObj); // Push this object on to the List
    this.master.createFlight(obj).subscribe((res:any)=>{
      if (res.result) {
        alert('Flight Created Success');
      } else {
        alert(res.message);
      }
    });
  }
}
