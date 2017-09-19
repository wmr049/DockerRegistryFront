import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceBase } from './service.base';
import { Usuario } from "app/pages/usuario/models/usuario";

@Injectable()
export class UsuarioService extends ServiceBase {

  
  constructor(private http: Http) { super(); }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let response = this.http
      .post(this.UrlServiceV1 + 'nova-conta', usuario, options)
      .map(super.extractData)
      .catch(super.serviceError)

    return response;
  }

  login(usuario: Usuario): Observable<Usuario> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const response = this.http
      .post(this.UrlServiceV1 + 'users/authenticate ', usuario, options)
      .map(super.extractData)
      .catch((super.serviceError));
    return response;
  }
}
