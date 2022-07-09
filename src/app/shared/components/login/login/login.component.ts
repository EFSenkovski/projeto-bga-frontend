import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

import { ErrorDialogComponent } from './../../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideSpinner = true;

  login = {
    username: '',
    password: ''
  };

  constructor(
    private dialog: MatDialog,
    private usuarioService: UsuariosService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    if (this.usuarioService.isUserLoggedIn()){
      this.router.navigate([''])
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hideSpinner = false;
    this.usuarioService.login(this.login.username,this.login.password).subscribe({
      next: (v) => {
        this.hideSpinner = true;
        const result = v
        if (result && result.access_token){
          window.localStorage.setItem('token', result.access_token);
          this.router.navigate([''])
          return true;
        }
        return false;
      },
      error: (e) => {
        this.hideSpinner = true;
        if (e.status = 400) {
          this.snackBar.open('Usuário/Senha inválidos', '', {duration: 10000})
        } else {
          this.onError(e);
        }
      }
    })

  }

  onError(error: HttpErrorResponse){
    this.dialog.open(ErrorDialogComponent, {
      data: {
        titulo: error.status,
        mensagem: error.message
      }
    });
  }

}
