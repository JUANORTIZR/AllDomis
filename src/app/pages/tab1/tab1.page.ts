import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonImg, IonCol, IonGrid, IonRow, IonTabButton, IonButton, IonFab, IonFabButton, IonIcon, IonSearchbar, IonText } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { CompanyServiceService } from 'src/app/service/company-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonText, IonSearchbar, RouterLink, IonIcon, IonFabButton, IonFab, CommonModule, IonButton, IonTabButton, IonRow, IonGrid, IonCol, IonImg, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})

export class Tab1Page {

  companies: any[] = [];

  public results: any[] = [];

  constructor(private companyService: CompanyServiceService, private router:Router) {
    companyService.getCompanies().then((data) => {this.companies = data; this.results = data})

  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.companies.filter((d) => d.companyName.toLowerCase().indexOf(query) > -1);
  }

  requestService(id: string){
    console.log("requestService with id: " + id);
    let data : NavigationExtras = {
      queryParams: {
        companyId: id
      }
    }
    this.router.navigate(['/request-service'], data);
  }


}
