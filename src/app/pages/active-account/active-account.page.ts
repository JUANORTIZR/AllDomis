import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonFooter, IonLabel, IonInput, IonImg, IonGrid } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.page.html',
  styleUrls: ['./active-account.page.scss'],
  standalone: true,
  imports: [IonGrid, IonImg, IonInput, RouterLink, IonLabel, IonFooter, IonCol, IonButton, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActiveAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
