import { Location } from '@angular/common';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, of, Observable } from 'rxjs';

import { UsuariosService } from '../usuarios/services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

  constructor (
    private usuarioService: UsuariosService,
    private router: Router,
    private location: Location
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this.usuarioService.getAuthorizationToken();
    let request: HttpRequest<any> = req;
    if (token){
      if (!this.usuarioService.isTokenExpired(token)) {
        request = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(request)
        .pipe(
          catchError(this.handleError)
        );
      } else{
        this.usuarioService.getAcessTokenWithRefreshToken().subscribe({
          next: (v) => {
            if (v && v.access_token){
              window.localStorage.setItem('token', v.access_token);
              request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${v.access_token}`)
              })
            }
            return next.handle(request)
            .pipe(
              catchError(this.handleError)
            );
          }
        })
      }
    }
    return next.handle(request)
    .pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
    try {
      if (error.status){
        if (error.status === 401){
          location.reload();
        }
      }
    } catch (error) {
      console.log(error)
    }
    return new Observable<never>();
  }
}
