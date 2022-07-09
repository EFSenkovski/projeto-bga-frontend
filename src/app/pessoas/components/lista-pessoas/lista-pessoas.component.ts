import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../../shared/components/error-dialog/error-dialog.component';
import { Pessoa } from './../../model/pessoa';
import { PessoasService } from './../../services/pessoas.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
})
export class ListaPessoasComponent implements OnInit {
  pessoas$: Observable<Pessoa[]>;
  displayedColumns = [
    'id',
    'nomeRazaoSocial',
    'nomeFantasia',
    'email',
    'celular',
    'tipoPessoa',
    'actions',
  ];
  filtro: string = '';
  @ViewChild('inputFiltro') inputFiltro!: ElementRef;

  constructor(
    private pessoaService: PessoasService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.pessoas$ = pessoaService.list().pipe(
      catchError((error) => {
        this.onError(error);
        return of([]);
      })
    );
  }

  onError(error: HttpErrorResponse) {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        titulo: error.status,
        mensagem: error.message,
      },
    });
  }

  onSucess() {
    this.snackBar.open('Pessoa deletada com sucesso', '', { duration: 5000 });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(pessoa: Pessoa) {
    const id = pessoa.id ? pessoa.id : null;
    this.router.navigate([`edit/${id}`], { relativeTo: this.route });
  }

  onDelete(pessoa: Pessoa) {
    this.pessoaService.delete(pessoa).subscribe(
      (result) => {
        this.onSucess();
        this.pessoas$ = this.pessoaService.list().pipe(
          catchError((error) => {
            this.onError(error);
            return of([]);
          })
        );
      },
      (error) => {
        this.onError(error);
      }
    );
  }

  onPesquisar() {
    this.pessoas$ = this.pessoaService.listByNome(this.filtro).pipe(
      catchError((error) => {
        this.onError(error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}
}
