import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-obtenerusuario',
  templateUrl: './obtenerusuario.component.html',
  styleUrls: ['./obtenerusuario.component.css']
})
export class ObtenerusuarioComponent implements OnInit {
  getusuarioForm: FormGroup;
  id = "identificador";
  usuario: Usuario;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService) 
  {
    this.getusuarioForm = this.fb.group({
      noteId: ['', Validators.required]
    })
    this.usuario = {createdAt: 123, apellidos: '', noteId: '', userId: '', nombres: ''}
  }

  ngOnInit(): void {
  }

  obtenerUsuario(){
    if(this.id != null) {
      console.log(this.getusuarioForm);
      this.id = this.getusuarioForm.get('noteId')?.value,
      this._usuarioService.getUsuario(this.id).subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => {
        console.log(error);
      })
    }  
    this.getusuarioForm.reset()
    this.toastr.success('Consulta realizada', 'Revisa!');
  }
}
