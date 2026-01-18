import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { start } from 'repl';
import { ClientService } from '../../services/client.service';
import { EmployeeList } from '../../model/class/interface/user';
import { Client } from '../../model/class/Client';
import { sign } from 'crypto';

@Component({
  selector: 'app-clientproject',
  imports: [ReactiveFormsModule],
  templateUrl: './clientproject.component.html',
  styleUrl: './clientproject.component.css'
})
export class ClientprojectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl('0'), //Primary Key
    projectName: new FormControl('',[Validators.required,Validators.minLength(5)]), // because it will be string
    startDate: new FormControl(''), //date
    epectedEndDate: new FormControl(''), //date
    leadByEmpId: new FormControl(''), //foreign key
    completedDate: new FormControl(''), //date
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmail: new FormControl(''),
    clientId: new FormControl(''), //foreign key
  });

  clientSrv = inject(ClientService);
  employeeList: EmployeeList[] = [];
  clientList: Client[] = [];
  firstName = signal('John')

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.clientSrv.getAllEmployees().subscribe((res: any) => {
      this.employeeList = res.data;
    });
  }
  changeFname(){
    this.firstName.set('Welcome');
  }
  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: any) => {
      this.clientList = res.data;
    });
  }

}
