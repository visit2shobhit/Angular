import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
   clientObject:Client = new Client();
   clientList:Client[] = [];
   clientService=inject(ClientService);
   ngOnInit(): void {
     this.loadAllClients();
   }
   loadAllClients(){
      this.clientService.getAllClients().subscribe((res:any)=>{
        console.log('testestest');
        
        console.log(res.data,'RESRES');
        
        this.clientList = res.data;
      });
   }
   saveClient(){
      this.clientService.addUpdate(this.clientObject).subscribe((res:any)=>{
        if(res.result){
          alert('Client Saved Successfully');
          this.loadAllClients();
        } else{
          alert('Error while saving client');
        }
      });
   }
}
