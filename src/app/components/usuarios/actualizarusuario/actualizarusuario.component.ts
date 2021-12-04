import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { Usuariocreado } from 'src/app/models/usuariocreado';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actualizarusuario',
  templateUrl: './actualizarusuario.component.html',
  styleUrls: ['./actualizarusuario.component.css']
})
export class ActualizarusuarioComponent implements OnInit {
  getusuarioForm: FormGroup;
  id = "identificador";
  usuario: Usuario;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService) 
  { 
    this.getusuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      noteId: ['', Validators.required]
    })
    this.usuario = {createdAt: 123, apellidos: '', noteId: '', userId: '', nombres: ''}
  }

  ngOnInit(): void {
  }

  actualizarUsuario(){
    if(this.id != null) {
      const USUARIO: Usuariocreado = {
        nombres: this.getusuarioForm.get('nombres')?.value,
        apellidos: this.getusuarioForm.get('apellidos')?.value, 
      }
      console.log(this.getusuarioForm);
      this.id = this.getusuarioForm.get('noteId')?.value;
      this._usuarioService.updateUsuario(this.id,USUARIO).subscribe(data => {
        console.log(data);
        this._usuarioService.getUsuario(this.id).subscribe(data => {
          console.log(data)
          this.usuario = data;
        }, error => {
          console.log(error);
        })
      }, error => {
        console.log(error);
      })

      

    }  
    this.getusuarioForm.reset()
    this.toastr.success('Consulta realizada', 'Revisa!');
  }
}
