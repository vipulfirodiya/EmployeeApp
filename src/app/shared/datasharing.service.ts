import { Injectable, Output, EventEmitter} from '@angular/core';
 

@Injectable()
export class DataSharingService {
    currentEmployee = <any>{};
    @Output() newEmployeeEmitter = new EventEmitter<any>();

    constructor() { }
    
    setCurrentEmployee(employee){
        this.currentEmployee = employee;    
    }

    getCurrentEmployee(){
        return this.currentEmployee;
    }
    
    setNewEmployee(employee){
        return this.newEmployeeEmitter.emit(employee);
    }
}