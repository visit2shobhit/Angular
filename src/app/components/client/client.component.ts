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
  clientObject: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
  ngOnInit(): void {
    this.loadAllClients();
  }
  loadAllClients() {
    this.clientService.getAllClients().subscribe((res: any) => {
      this.clientList = res.data;
    });
  }
  saveClient() {
    this.clientService.addUpdate(this.clientObject).subscribe((res: any) => {
      if (res.result) {
        alert('Client Saved Successfully');
        this.loadAllClients();
      } else {
        alert('Error while saving client');
      }
    });
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this client?');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: any) => {
        if (res.result) {
          alert('Client Deleted Successfully');
          this.loadAllClients();
        } else {
          alert('Error while deleting client');
        }
      });
    }
  }
  onEdit(item: Client) {
    this.clientService.addUpdate(this.clientObject).subscribe((res: any) => {
      if (res.result) {
        alert('Client Updated Successfully');
        this.loadAllClients();
      } else {
        alert('Error while saving client');
      }
    });
  }
}
