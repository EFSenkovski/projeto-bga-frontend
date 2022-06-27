import { ErrorDialogComponent } from './../../../shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmpresasService } from './../../services/empresas.service';
import { Observable, catchError, of } from 'rxjs';
import { Empresa } from '../../model/empresa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas$: Observable<Empresa[]>;
  displayedColumns = ['id','razaoSocial','nomeFantasia','cnpj','ie','uf','cidade','actions']

  constructor(
    private empresaService: EmpresasService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ){
    this.empresas$ = empresaService.list()
    .pipe(
      catchError(error => {
        console.log(error);
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

  onEdit(empresa: Empresa){
    const id = empresa.id ? empresa.id : null;
    this.router.navigate([`edit/${id}`], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }


}
