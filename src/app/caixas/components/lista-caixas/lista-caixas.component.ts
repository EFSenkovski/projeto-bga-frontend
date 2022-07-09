import { CaixasService } from './../../services/caixas.service';
import { ErrorDialogComponent } from './../../../shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Caixa } from './../../model/caixa';
import { of, Observable, catchError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-caixas',
  templateUrl: './lista-caixas.component.html',
  styleUrls: ['./lista-caixas.component.css']
})
export class ListaCaixasComponent implements OnInit {

  caixas$: Observable<Caixa[]>;
  displayedColumns = ['id','descricao','valorAtual','dataUltimaMovimentacao','actions']

  constructor(
    private caixasService: CaixasService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.caixas$ = caixasService.list()
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

  onEdit(caixa: Caixa){
    const id = caixa.id ? caixa.id : null;
    this.router.navigate([`edit/${id}`], {relativeTo: this.route})
  }

  ngOnInit(): void {
  }

}
