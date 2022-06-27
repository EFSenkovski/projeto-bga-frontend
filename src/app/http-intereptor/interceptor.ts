import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios/services/usuarios.service'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

  constructor (
    private usuarioService: UsuariosService,
    private router: Router
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('OE')
    const token = this.usuarioService.getAuthorizationToken();
    let request: HttpRequest<any> = req;
    if (token){
      if (!this.usuarioService.isTokenExpired(token)) {
        request = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
      } else{
        let retorno = false
        this.usuarioService.getAcessTokenWithRefreshToken().subscribe({
          next: (v) => {
            const result = v
            if (result && result.access_token){
              window.localStorage.setItem('token', result.access_token);
              document.cookie="refreshToken="
              console.log(v);
              request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${result.access_token}`)
              })
            }
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
        console.log(error)
        if (error.status == 401){
          window.localStorage.removeItem('token');
          this.router.navigate([''])
        }
      }
    } catch (error) {
      console.log(error)
    }
    return throwError(error);
  }
}
