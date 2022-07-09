import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios$: Observable<Usuario[]>;
  displayedColumns = ['id','nome','email','administrador','ativo','actions']

  constructor(
    private usuarioService: UsuariosService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ){
    this.usuarios$ = usuarioService.list()
    .pipe(
      catchError(error => {
        this.onError(error)
        return of([])
      })
    )
  }

  onError(error: HttpErrorResponse){
    this.dialog.open(ErrorDialogComponent, {
      data: {
        titulo: error.status,
        mensagem: error.message
      }
    });
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(usuario: Usuario){
    const id = usuario.id ? usuario.id : null;
    this.router.navigate([`edit/${id}`], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }

}
