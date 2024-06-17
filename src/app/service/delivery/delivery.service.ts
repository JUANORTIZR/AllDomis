import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RequestDelivery } from 'src/app/domain/request/request-delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor() { }

  async requestService(request: RequestDelivery): Promise<any> {

    const response = await fetch("http://34.221.27.157:31168/Domicilio/crear", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json' // Add this line
      },
      body: JSON.stringify(request)
    });
    const data = await response.json();

    return data;
  }

  async getDeliverysByEmail(email:string): Promise<any> {
    const response = await fetch(`http://34.221.27.157:31168/Domicilio/correo/obtener/`+email);
    const data = await response.json();
    return data;
  }


}
