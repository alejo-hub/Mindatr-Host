import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup  } from '@angular/forms';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {CompaniesServicesService} from '../services/companies-services.service';
import { Location, } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoginArtistasService } from '../services/login-artistas.service';


@Component({
  selector: 'app-login-empresas',
  templateUrl: './login-empresas.component.html',
  styleUrls: ['./login-empresas.component.css']
})
export class LoginEmpresasComponent implements OnInit {


  datosLogin = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  hide = true;
  company:any;



  constructor(private service: CompaniesServicesService,
    private location: Location, private firestore: AngularFirestore,private router: Router, private authSvc: LoginArtistasService) {

  }

  ngOnInit(): void {
  }

  async onSubmitLogin(){
    try {
      const user = await this.authSvc.login(this.datosLogin.value.email, this.datosLogin.value.password);
      if (user) {
        this.router.navigate(['/inicio-empresas']);
      }
      else{alert("usuario o contraseña incorrectos")}
    } catch (error) { console.log(error);}
  }
 
}
