import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees = <any>{};
  searchText = "";
  constructor() { }

  ngOnInit() {
    this.employees = {"data": [{
      "id": 1,
      "name": "Jhon",
      "phone": "9999999999",
      "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }, {
      "id": 2,
      "name": "Jacob",
      "phone": "AZ99A99PQ9",
      "address":
      {
      "city": "Pune",
      "address_line1":"PQR road",
      "address_line2":"ABC building",
      "postal_code":"13455"
      }
      }, {
      "id": 3,
      "name": "Ari",
      "phone": "145458522",
      "address":
      {
      "city": "Mumbai",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }]
      }
  }

  validateNumber(number){
    var Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

    if(!number.match(Exp))
        return number;
    else
        return "NA";
  }
}
