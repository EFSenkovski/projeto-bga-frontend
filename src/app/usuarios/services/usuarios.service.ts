import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { delay, take, Observable } from 'rxjs';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = 'https://projeto-bga-spring.herokuapp.com/usuarios';
  private readonly APILogin = 'https://projeto-bga-spring.herokuapp.com/oauth/token';

  list() {
    return this.httpClient.get<Usuario[]>(this.API).pipe(take(1));
  }

  login(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.httpClient
      .post<any>(this.APILogin, body, { headers, withCredentials: true })
      .pipe(take(1));
  }

  getById(id: string) {
    return this.httpClient.get<Usuario>(this.API + '/' + id).pipe(take(1));
  }

  save(u: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', '*/*');

    if (u.id) {
      return this.httpClient.put<Usuario>(this.API + 'usuarios/' + u.id, u, {
        headers,
      });
    } else {
      return this.httpClient.post<Usuario>(this.API, u, { headers });
    }
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getIdUser() {
    if (this.isUserLoggedIn()) {
      const id = window.localStorage.getItem('iduser');
      if (id) {
        return id;
      } else {
        return '0';
      }
    } else {
      return '0';
    }
  }

  getTokenExpirationDate(token: string): Date {
    const helper = new JwtHelperService();
    //const decoded: any = jwt_decode(token);
    let date = helper.getTokenExpirationDate(token);
    if (!date) {
      date = new Date(0);
    }
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    let date = this.getTokenExpirationDate(token);

    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): Boolean {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  getAcessTokenWithRefreshToken(): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.httpClient
      .post<any>(this.APILogin, body, { headers, withCredentials: true })
      .pipe(take(1));
  }

  findAll() {
    return this.httpClient.get<Usuario[]>(this.API + 'usuarios').pipe(take(1));
  }
}
