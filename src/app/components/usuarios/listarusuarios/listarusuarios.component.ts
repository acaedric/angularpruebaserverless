import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerusuarios();
  }

  obtenerusuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
}
