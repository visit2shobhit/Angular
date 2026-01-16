import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }
  getAllClients(){
    return this.http.get(environment.API_URL + "GetAllClients");
  }
  getAllEmployees(){
    return this.http.get(environment.API_URL + "GetAllEmployee");
  }
  addUpdate(obj:Client){
    return this.http.post(environment.API_URL + "AddUpdateClient", obj);
  }
  deleteClientById(id:number){
    return this.http.delete(environment.API_URL + "DeleteClientByClientId?clientId="+id);
  }
}
