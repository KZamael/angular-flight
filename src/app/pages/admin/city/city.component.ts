import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {

  cityList: any [] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
        this.getAllCity();
  }

  getAllCity() {
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity").subscribe((res:any)=>{
      this.cityList =  res.data;
      this.cityList.forEach(element => {
        element.isEdit = false;
      });
    })
  }

  bulkUpdateCity() {
    this.http.post("https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkCity", this.cityList).subscribe((res: any) => {
      if (res.result) {
        alert("Bulk Update Success");
      } else {
        alert(res.message)
      }
    })
  }

  addNewCity() {
    const obj = {
      cityId: 0,
      cityName: ''
    };
    this.cityList.unshift(obj); // Unshift pushes an object to the lists very start! <- useful here
  }
}
