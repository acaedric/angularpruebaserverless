import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistrarusuarioComponent } from './components/usuarios/registrarusuario/registrarusuario.component';
import { CrearusuarioComponent } from './components/usuarios/crearusuario/crearusuario.component';
import { ObtenerusuarioComponent } from './components/usuarios/obtenerusuario/obtenerusuario.component';
import { ListarusuariosComponent } from './components/usuarios/listarusuarios/listarusuarios.component';
import { ActualizarusuarioComponent } from './components/usuarios/actualizarusuario/actualizarusuario.component';
import { EliminarusuarioComponent } from './components/usuarios/eliminarusuario/eliminarusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuariosComponent,
    RegistrarusuarioComponent,
    CrearusuarioComponent,
    ObtenerusuarioComponent,
    ListarusuariosComponent,
    ActualizarusuarioComponent,
    EliminarusuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
