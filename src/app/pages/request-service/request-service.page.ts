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
  constructor(private ruteActive : ActivatedRoute, private serviceDelivery: DeliveryService, private storage: Storage) {
    this.ruteActive.queryParams.subscribe(params => {
      console.log("companyId: " + params['companyId']);
        this.companyIdSeled = params['companyId']
    })
    this.http = inject(HttpClient)
  }


  profileForm!: FormGroup;

  ngOnInit() {
    this.storage.create()

    this.profileForm = new FormGroup({
      addressA: new FormControl(''),
      addressB: new FormControl(''),
      description: new FormControl(''),
    });
  }

  confirm(){
    const requestService = new RequestDelivery();

    requestService.precio = 2000
    requestService.nombre = "domicilio"
    requestService.idEmpresa = this.companyIdSeled;
    requestService.fecha = new Date().toDateString();
    requestService.correoUsuario = "juan@gmail.com";
    requestService.descripcion = this.profileForm.value.description == undefined ? "" : this.profileForm.value.description;
    requestService.direccionDestino = this.profileForm.value.addressB == undefined ? "" : this.profileForm.value.addressB;
    requestService.direccionOrigen = this.profileForm.value.addressA == undefined ? "" : this.profileForm.value.addressA;

    // const headers = { 'Content-Type': 'application/json' };
    // this.http.post<any>("http://34.221.27.157:31168/Domicilio/crear", JSON.stringify(requestService), { headers }).subscribe((data:any) => {console.log(data);
    // })

    this.serviceDelivery.requestService(requestService).then((data) => {
       console.log(data);
    });

  }

}
