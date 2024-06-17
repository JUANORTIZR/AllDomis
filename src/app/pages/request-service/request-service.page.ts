import { Component, OnInit, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonCol, IonRow, IonImg, IonGrid, IonInput, IonAccordionGroup, IonAccordion, IonItem, IonModal, IonTextarea } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DeliveryService } from 'src/app/service/delivery/delivery.service';
import { RequestDelivery } from 'src/app/domain/request/request-delivery';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.page.html',
  styleUrls: ['./request-service.page.scss'],
  standalone: true,
  imports: [HttpClientModule, IonTextarea, ReactiveFormsModule, IonModal, IonItem, IonAccordion, IonAccordionGroup, IonInput, IonGrid, IonImg, IonRow, IonCol, RouterLink, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RequestServicePage implements OnInit {

  companyIdSeled: string = "2";
  http: HttpClient;
  userActive: any;
  constructor(private ruteActive : ActivatedRoute,  private router: Router, private serviceDelivery: DeliveryService, private storage: Storage) {
    this.ruteActive.queryParams.subscribe(params => {
      console.log("companyId: " + params['companyId']);
        this.companyIdSeled = params['companyId']
    })
    this.http = inject(HttpClient)
    this.storage.create()
    this.getDataStorage().then((data) => {this.userActive = data; console.log("dentro de then: ", this.userActive);
    })

  }


  profileForm!: FormGroup;

  ngOnInit() {


    this.profileForm = new FormGroup({
      addressA: new FormControl(''),
      addressB: new FormControl(''),
      description: new FormControl(''),
    });
  }

  async getDataStorage(){
    let user = await this.storage.get('user')

    return user;
  }

  confirm(){
    const requestService = new RequestDelivery();
    console.log("UserAtributte: ", this.userActive);
    console.log("Telefono: ", this.userActive.phoneNumber.value);

    requestService.precio = 2000
    requestService.nombre = "domicilio"
    requestService.idEmpresa = this.companyIdSeled;
    requestService.fecha = new Date().toDateString();
    requestService.correoUsuario = this.userActive.phoneNumber.value;
    requestService.descripcion = this.profileForm.value.description == undefined ? "" : this.profileForm.value.description;
    requestService.direccionDestino = this.profileForm.value.addressB == undefined ? "" : this.profileForm.value.addressB;
    requestService.direccionOrigen = this.profileForm.value.addressA == undefined ? "" : this.profileForm.value.addressA;

    this.serviceDelivery.requestService(requestService).then((data) => {
       console.log(data);
       this.router.navigate(['/tab2'])
    });

  }

}
