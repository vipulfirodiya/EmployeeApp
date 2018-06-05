import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'', 
    component: EmployeesComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: ':id/edit', component: EditComponent },
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
  
 }
