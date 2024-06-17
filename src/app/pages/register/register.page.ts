import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonInput, IonButton, IonFooter, IonLabel } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { RequestRegister } from 'src/app/domain/request/request-login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonLabel,ReactiveFormsModule, IonFooter, IonButton, IonInput, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class RegisterPage implements OnInit {

  profileForm!: FormGroup;
  dataUser: any;
  constructor(private loginService: LoginService, private router: Router) { 
    
  }

  
  ngOnInit() {

    this.profileForm = new FormGroup({
      nickname: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      name: new FormControl(''),
      phone_number: new FormControl(''),
    });
  }

  register(){
    const request = new RequestRegister();

    request.nickname = this.profileForm.get('nickname')?.value;
    request.password = this.profileForm.get('password')?.value;
    request.email = this.profileForm.get('email')?.value;
    request.name = this.profileForm.get('name')?.value;
    request.phone_number = "+57"+this.profileForm.get('phone_number')?.value;

    
    this.loginService.register(request).then((data) => {
      this.router.navigate(['/active-account']);
    })  
  }

}
