import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    EmployeesModule
  ],
  declarations: [BaseComponent]
})
export class BaseModule { }
