import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.usuarioService.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }

  isLoggedAlready(){
    return this.usuarioService.isUserLoggedIn();
  }

}
