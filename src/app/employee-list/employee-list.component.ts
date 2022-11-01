import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Employee } from 'src/app/model/employee';
import { AlertService } from '../service/alert.service';
import { EmployeeService } from '../service/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   employees: Employee[] = [];
   totalElements:number =0;
    name:any;
    p:number = 1;

  constructor(
    private employeeService: EmployeeService,
    private router:Router,
    private alert: AlertService,
  ) { }


  ngOnInit(): void {
    // this.getEmployees({ page: "0", size: "5" });
    this.employeeService.getEmployee().subscribe((res) => {
      this.employees = res;
    })
}
//   private getEmployees(request: any) {
//     this.employeeService.getEmployees(request)
//     .subscribe(data => {
//         this.employees = data['content'];
//         this.totalElements = data['totalElements'];
//     });
// }
// nextPage(event: PageEvent) {
//   const request: {[key:string]: string} = {};
//     request['page'] = event.pageIndex.toString();
// 		request['size'] = event.pageSize.toString();
//   this.getEmployees(request);
// }


  updateEmployee(id:number){
    this.router.navigate(['/update-employee',id]);
  }
  deleteEmployee(id:number){
    if(confirm('Are you sure to delete this record ?')){
      this.employeeService.deleteEmployee(id).subscribe(data => {
        this.alert.showMessage("Xóa nhân viên thành công");
        this.ngOnInit();
      })
    }
  }
  employeeDetails(id:number){
    this.router.navigate(['/employee-details',id]);
  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
  Search(){
    if(this.name ==""){
       this.ngOnInit();
    }else{
      this.employees = this.employees.filter(res =>{
        return res.name.trim().toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  key: string = 'id';
  reverse:boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
