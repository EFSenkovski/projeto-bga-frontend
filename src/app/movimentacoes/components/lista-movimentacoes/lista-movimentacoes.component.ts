import { ErrorDialogComponent } from './../../../shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Movimentacao } from './../../model/movimentacao';
import { Observable, catchError, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovimentacoesService } from './../../services/movimentacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-movimentacoes',
  templateUrl: './lista-movimentacoes.component.html',
  styleUrls: ['./lista-movimentacoes.component.css']
})
export class ListaMovimentacoesComponent implements OnInit {

  movimentos$: Observable<Movimentacao[]>;
  displayedColumns = ['id','caixa','empresa','usuario','descricao','valor','tipoMovimento','dataMovimento','actions']

  constructor(
    private movimentosService: MovimentacoesService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.movimentos$ = movimentosService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        this.onError(error)
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(m: Movimentacao){
    const id = m.id ? m.id : null;
    this.router.navigate([`edit/${id}`], {relativeTo: this.route})
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
