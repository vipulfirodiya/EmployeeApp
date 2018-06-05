import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/datasharing.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  empData = <any>{
    address:{}
  };
  myform: FormGroup;
  id: FormControl;
  name: FormControl;
  phone: FormControl;
  city: FormControl;
  address_line1: FormControl;
  address_line2: FormControl;
  postal_code: FormControl;
  constructor(private sharingService : DataSharingService, private router: Router) { }

  ngOnInit() {
    this.empData = this.sharingService.getCurrentEmployee();
    this.name = new FormControl('', Validators.pattern("^[A-Za-z]{4,}$"));
    this.phone = new FormControl('', Validators.pattern("^[0-9]+$"));
    this.id = new FormControl('');
    this.city = new FormControl('');
    this.address_line1 = new FormControl('');
    this.address_line2 = new FormControl('');
    this.postal_code = new FormControl('');
    
    this.myform = new FormGroup({
      id: this.id,
      name: this.name,
      phone: this.phone,
      address: new FormGroup({
        city: this.city,
        address_line1: this.address_line1,
        address_line2: this.address_line2,
        postal_code: this.postal_code,
      }),
    });
  }
  
  updateEmployee(employee){
    if(this.myform.valid){
      this.sharingService.setNewEmployee(employee);
      this.router.navigate(['/employees']);
    }else{
      alert("Invalid Inputs");
    }
  }

}
