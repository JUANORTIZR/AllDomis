import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DeliveryService } from 'src/app/service/delivery/delivery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, CommonModule, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

 deliverys : any[] = [];

  constructor(private deliveryService: DeliveryService) {
    this.deliveryService.getDeliverysByEmail("juan@gmail.com").then((data) => this.deliverys = data)
  }

}
