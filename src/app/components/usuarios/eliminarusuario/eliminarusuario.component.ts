import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eliminarusuario',
  templateUrl: './eliminarusuario.component.html',
  styleUrls: ['./eliminarusuario.component.css']
})
export class EliminarusuarioComponent implements OnInit {
  eliminarusuarioForm: FormGroup;
  id = "identificador";
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService) 
  { 
    this.eliminarusuarioForm = this.fb.group({
      noteId: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  eliminarUsuario(){
    if(this.id != null) {
      console.log(this.eliminarusuarioForm);
      this.id = this.eliminarusuarioForm.get('noteId')?.value,
      this._usuarioService.deleteUsuario(this.id).subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error);
      })
    }  
    this.eliminarusuarioForm.reset()
    this.toastr.success('Eliminación realizada', 'Usuario eliminado!');
  }
}
