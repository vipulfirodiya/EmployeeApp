import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { EmployeesModule } from '../base/employees/employees.module';

const routes: Routes = [{
  path:'', 
  component: BaseComponent,
  children: [
      { path: '', pathMatch:'full', redirectTo: 'employees' },
      { path: 'employees', loadChildren: () => EmployeesModule },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
