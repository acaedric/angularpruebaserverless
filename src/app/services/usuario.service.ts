import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Usuariocreado } from '../models/usuariocreado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://nef33hef0m.execute-api.us-east-2.amazonaws.com/prod/createnote';
  url2 = 'https://nef33hef0m.execute-api.us-east-2.amazonaws.com/prod/notes';
  url3 = 'https://nef33hef0m.execute-api.us-east-2.amazonaws.com/prod/updatenote';
  url4 = 'https://nef33hef0m.execute-api.us-east-2.amazonaws.com/prod/deletenote';
  constructor(private http: HttpClient) { }


  createUsuario(usuario: Usuariocreado): Observable<any> {
    return this.http.post(this.url, usuario)
  }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url2);
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get(`${this.url2}/${id}`)
  }

  updateUsuario(id:string, usuario: Usuariocreado): Observable<any> {
    return this.http.put(`${this.url3}/${id}`, usuario)
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.url4}/${id}`)
  }
}
