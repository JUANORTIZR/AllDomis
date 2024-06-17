import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DeliveryService } from 'src/app/service/delivery/delivery.service';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, CommonModule, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  deliverys: any[] = [];

  userActive: any;

  constructor(private deliveryService: DeliveryService, private storage: Storage) {
    this.storage.create()
    this.getDataStorage().then((data) => {
      this.userActive = data;
      console.log("dentro de then: ", this.userActive);
      this.deliveryService.getDeliverysByEmail(this.userActive.phoneNumber.value).then((data) => this.deliverys = data)
    })
  }

  async getDataStorage() {
    let user = await this.storage.get('user')

    return user;
  }


}
