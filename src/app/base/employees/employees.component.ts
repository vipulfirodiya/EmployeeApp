import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../../shared/datasharing.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees = <any>{};
  searchText = "";
  constructor(private router :Router, private sharingService: DataSharingService){}

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
    };
    this.sharingService.newEmployeeEmitter.subscribe(
      data => {
        if(data.id){
          this.employees.data.splice(data.id-1, 1);
          this.employees.data.splice(data.id-1, 0, data);
        }else{
          data.id = Math.max.apply(Math, this.employees.data.map(function(o){return o.id;}))+1;
          this.employees.data.push(data);
        }
      }
    )
  }

  addNew(){
    this.router.navigate(['/employees/add']);
  }

  editEmp(employee){
    this.router.navigate(['/employees/'+employee.id+'/edit']);
    this.sharingService.setCurrentEmployee(employee);
  }

  showRoute(route){
    var currentUrl = window.location.href
    if(currentUrl.indexOf(route) > 0){
      return true;
    }else{
      return false;
    }
  }

  showBaseRoute(){
    var currentUrl = window.location.href
    if(currentUrl.indexOf('add') > 0 || currentUrl.indexOf('edit') > 0){
      return false;
    }else{
      return true;
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
