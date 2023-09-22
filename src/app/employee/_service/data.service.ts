import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {employeeModel} from "../_model/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockEmployee: employeeModel[] = [
    {
      id: 1,
      basicSalary: 9000000,
      email: 'admin@admin.com',
      username: 'test',
      description: 'just random description',
      group: 'siskaee',
      firstName: 'one',
      lastName: 'two',
      status: 'active',
      birthDate: '12/12/2024'
    }
  ];

  constructor() { }

  getEmployees(): Observable<employeeModel[]> {
    return of(this.mockEmployee);
  }

  getEmployee(id: number): Observable<employeeModel> {
    return of(this.mockEmployee.find(data => data.id.toString() === (id ? id.toString() : ''))!);
  }

  addEmployee(data: employeeModel): Observable<null> {
    this.mockEmployee.push(data);
    return of();
  }

  editEmployee(ids: number, data: employeeModel): Observable<null> {
    this.mockEmployee[this.mockEmployee.findIndex(el => el.id === ids)] = data;
    return of();
  }

  removeEmployee(id: number): Observable<null> {
    this.mockEmployee = this.mockEmployee.filter(function(item) {
      return item.id != id;
    });
    return of();
  }
}
