import { Component, OnInit, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonCol, IonRow, IonImg, IonGrid, IonInput, IonAccordionGroup, IonAccordion, IonItem, IonModal, IonTextarea } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DeliveryService } from 'src/app/service/delivery/delivery.service';
import { RequestDelivery } from 'src/app/domain/request/request-delivery';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.page.html',
  styleUrls: ['./request-service.page.scss'],
  standalone: true,
  imports: [HttpClientModule, IonTextarea, ReactiveFormsModule, IonModal, IonItem, IonAccordion, IonAccordionGroup, IonInput, IonGrid, IonImg, IonRow, IonCol, RouterLink, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RequestServicePage implements OnInit {

  companyIdSeled: string = "2";
  constructor(private ruteActive : ActivatedRoute, private serviceDelivery: DeliveryService) {
    this.ruteActive.queryParams.subscribe(params => {
      console.log("companyId: " + params['companyId']);
        this.companyIdSeled = params['companyId']
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

    this.serviceDelivery.requestService(requestService).then((data) => {
      console.log(data);
    });

  }

}
