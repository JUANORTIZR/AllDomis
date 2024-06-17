import { Injectable } from '@angular/core';
import { RequestLogin } from '../domain/request/request-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  async login(request: RequestLogin): Promise<any> {
    const response = await fetch("http://34.221.27.157:31164/identificate-cv/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Add this line
      },
      body: JSON.stringify(request)
    });
    const data = await response.json();

    return data;
  }

}
