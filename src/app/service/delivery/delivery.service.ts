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
      headers: {},
      body: JSON.stringify({
        precio: request.precio,
        nombre: request.nombre,
        idEmpresa: request.idEmpresa,
        fecha: new Date().toString(),
        correoUsuario: request.correoUsuario,
        descripcion: request.descripcion,
        direccionDestino: request.direccionDestino,
        direccionOrigen: request.direccionOrigen
      })
    });
    const data = await response.json();

    return data;
  }
}
