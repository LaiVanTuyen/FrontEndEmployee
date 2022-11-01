import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
    }),
    ReactiveFormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
