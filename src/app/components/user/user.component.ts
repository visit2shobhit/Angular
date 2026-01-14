import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UserList } from '../../model/class/interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userList:UserList[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    // Logic to get all users
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
    })
  }  
}
