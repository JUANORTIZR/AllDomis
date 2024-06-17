import { Component, NgModule, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterLink, provideRouter } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonLabel, IonRow, IonCol, IonCard, IonList, IonInput, IonTabButton, IonButton, IonItem, IonText, IonFooter, IonImg } from '@ionic/angular/standalone';
import { LoginService } from 'src/app/service/login.service';
import { RequestLogin } from 'src/app/domain/request/request-login';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  providers: [IonicStorageModule],
  imports: [ReactiveFormsModule, IonImg, RouterLink, IonFooter, IonText, IonItem, IonButton, IonTabButton, IonInput, IonList, IonCard, IonCol, IonRow, IonLabel, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {

  profileForm!: FormGroup;
  dataUser: any;
  constructor(private loginService: LoginService, private router: Router, private storage: Storage) {

   }


   ngOnInit() {

    this.storage.create()

    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }


  async getDataStorage(){
    let user = await this.storage.get('user')

    return user;
  }

  login() {

    const request = new RequestLogin();

    request.nickname = this.profileForm.get('username')?.value;
    request.password = this.profileForm.get('password')?.value;

    this.loginService.login(request).then((data) => {
      this.dataUser = data;
      this.redirect(data);
      this.storage.set('user', this.dataUser.userAttributes);
    });
  }

  redirect(data: any){
    console.log("redirect: ",data.userAttributes[5]);

    if (data.userAttributes[5] != undefined) {
      this.router.navigate(['/tabs']);
    }

  }

}
