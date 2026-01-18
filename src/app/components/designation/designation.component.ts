import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-designation',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  toDoList : any = [];
  isLoader: boolean = true
  designationList$:Observable<any> = new Observable<any>(); // API Calling using Async Pipe and observable
  ngOnInit(): void{
    this.designationList$ = this.masterService.getToDo();
  }

}
