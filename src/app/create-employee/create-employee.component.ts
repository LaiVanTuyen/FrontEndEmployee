import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { AlertService } from '../service/alert.service';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService : EmployeeService,

    private router: Router,
    private alert : AlertService
    ) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.alert.showMessage("Thêm nhân viên thành công");
      this.gotoEmployeeList();

    }),
      (error: any) => {
        return console.log(error);
      };

  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
