import { Injectable } from '@angular/core';
import { RequestActivate, RequestLogin, RequestRegister } from '../domain/request/request-login';

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

  async register(request: RequestRegister): Promise<any> {
    const response = await fetch("http://34.221.27.157:31164/identificate-cv/sing-up", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Add this line
      },
      body: JSON.stringify(request)
    });
    const data = await response.json();

    return data;
  }

  async activate(request: RequestActivate): Promise<any> {
    const response = await fetch("http://34.221.27.157:31164/identificate-cv/verification-account", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(request)
    });
    const data = await response.json();

    return data;
  }

}
