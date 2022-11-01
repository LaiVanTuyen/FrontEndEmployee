import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl:string = 'http://localhost:8080/api/v1/employees';
  constructor(private httpClient: HttpClient) { }
  getEmployee(){
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  // getEmployees(request: any):Observable<any>{
  //   const params = request;
  //   return this.httpClient.get(`${this.baseUrl}`,{params});
  // }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
