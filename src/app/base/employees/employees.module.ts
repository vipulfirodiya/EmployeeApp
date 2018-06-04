import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../shared/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
  ],
  declarations: [EmployeesComponent, FilterPipe]
})
export class EmployeesModule { }
