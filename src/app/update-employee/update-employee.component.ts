import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { AlertService } from '../service/alert.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private alert : AlertService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    }),(error: any) => {
      console.log(error);
    }
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);this.alert.showMessage("Cập nhật nhân viên thành công");
      this.gotoEmployeeList();
    }),(error: any) => {
      console.log(error);
    }
  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
