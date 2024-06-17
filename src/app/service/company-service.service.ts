import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor() { }

  async getCompanies(): Promise<any> {
    const response = await fetch(`http://34.221.27.157:31167/Company`);
    const data = await response.json();
    return data;
  }

}
