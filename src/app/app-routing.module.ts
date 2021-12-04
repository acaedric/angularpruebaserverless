import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActualizarusuarioComponent } from './components/usuarios/actualizarusuario/actualizarusuario.component';
import { CrearusuarioComponent } from './components/usuarios/crearusuario/crearusuario.component';
import { EliminarusuarioComponent } from './components/usuarios/eliminarusuario/eliminarusuario.component';
import { ListarusuariosComponent } from './components/usuarios/listarusuarios/listarusuarios.component';
import { ObtenerusuarioComponent } from './components/usuarios/obtenerusuario/obtenerusuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {
    path: 'usuarios', 
    component: UsuariosComponent,
    children: [
      {
        path: 'crearusuario',
        component: CrearusuarioComponent
      },
      {
        path: 'listarusuarios',
        component: ListarusuariosComponent
      },
      {
        path: 'consultarusuario',
        component: ObtenerusuarioComponent
      },
      {
        path: 'actualizarusuario',
        component: ActualizarusuarioComponent
      },
      {
        path: 'eliminarusuario',
        component: EliminarusuarioComponent
      }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
