import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { GeneralComponent } from './general/general.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginEmpresasComponent } from './login-empresas/login-empresas.component';
import { SigninEmpresasComponent } from './signin-empresas/signin-empresas.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { from } from 'rxjs';
import { PerfilArtistasComponent } from './perfil-artistas/perfil-artistas.component';
import { PerfilEmpresasComponent } from './perfil-empresas/perfil-empresas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InicioArtistasComponent } from './inicio-artistas/inicio-artistas.component';
import { InicioEmpresasComponent } from './inicio-empresas/inicio-empresas.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { ArtistListComponent } from './artist-list/artist-list.component';
import {MatTableModule} from '@angular/material/table';

import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { FormProyectoComponent } from './form-proyecto/form-proyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InfoComponent,
    GeneralComponent,
    LoginComponent,
    SigninComponent,
    EmpresasComponent,
    LoginEmpresasComponent,
    SigninEmpresasComponent,
    PerfilArtistasComponent,
    PerfilEmpresasComponent,
    LoginAdminComponent,
    InicioArtistasComponent,
    InicioEmpresasComponent,
    InicioAdminComponent,

    ArtistListComponent,

    SubirArchivoComponent,

    FormProyectoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
  ],
  entryComponents: [LoginComponent,SigninComponent,EmpresasComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }