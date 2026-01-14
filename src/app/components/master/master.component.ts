import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-master',
  imports: [UserComponent,DesignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentSelectedTab: string = "Users";
  changeTab(tabName: string) {
    this.currentSelectedTab = tabName;
  }
}
