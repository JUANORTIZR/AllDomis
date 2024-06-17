import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonFooter, IonLabel, IonInput, IonImg, IonGrid } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { RequestActivate } from 'src/app/domain/request/request-login';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.page.html',
  styleUrls: ['./active-account.page.scss'],
  standalone: true,
  imports: [IonGrid, ReactiveFormsModule, IonImg, IonInput, RouterLink, IonLabel, IonFooter, IonCol, IonButton, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActiveAccountPage implements OnInit {
  profileForm!: FormGroup;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      nickname: new FormControl(''),
      code: new FormControl(''),
    });
  }

  activate() {
    const request = new RequestActivate();
    request.nickname = this.profileForm.get('nickname')?.value;
    request.code = this.profileForm.get('code')?.value;

    this.loginService.activate(request).then((data) => {
      this.router.navigate(['/login']);
    })  
  }

}
