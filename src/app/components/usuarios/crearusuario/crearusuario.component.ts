import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { Usuariocreado } from 'src/app/models/usuariocreado';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService) 
  { 
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
    })
    
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    
    const USUARIO: Usuariocreado = {
        nombres: this.usuarioForm.get('nombres')?.value,
        apellidos: this.usuarioForm.get('apellidos')?.value, 
    }

    console.log(USUARIO);

    this._usuarioService.createUsuario(USUARIO).subscribe(data =>{
    }, error => {
      console.log(error);
    });
    
    this.usuarioForm.reset()
    this.toastr.success('El usuario ha sido registrado con éxito', 'Registrado correctamente!');
    this.router.navigate(['/']);
  }

}
