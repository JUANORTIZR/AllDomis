import { Component, OnInit } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonLabel, IonRow, IonCol, IonCard, IonList, IonInput, IonTabButton, IonButton, IonItem, IonText, IonFooter, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, RouterLink, IonFooter, IonText, IonItem, IonButton, IonTabButton, IonInput, IonList, IonCard, IonCol, IonRow, IonLabel, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
