import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  toDoList : any = [];
  isLoader: boolean = true
  ngOnInit(): void{
    this.masterService.getToDo().subscribe((res)=>{
      this.toDoList = res;
      this.isLoader = false;
    }, error=>{
      this.isLoader = false;
      alert('API Error/Network Down')
    })
  }

}
