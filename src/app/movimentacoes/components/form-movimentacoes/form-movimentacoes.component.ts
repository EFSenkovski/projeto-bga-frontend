import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MovimentacoesService } from '../../services/movimentacoes.service';
import { Caixa } from './../../../caixas/model/caixa';
import { CaixasService } from './../../../caixas/services/caixas.service';

@Component({
  selector: 'app-form-movimentacoes',
  templateUrl: './form-movimentacoes.component.html',
  styleUrls: ['./form-movimentacoes.component.css']
})
export class FormMovimentacoesComponent implements OnInit {

  form: FormGroup;
  hide = true;
  title: string;
  caixas$: Observable<Caixa[]>;

  constructor(
    private formBuilder: FormBuilder,
    private movimentacoesService: MovimentacoesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private caixasService: CaixasService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.caixas$ = this.caixasService.list();
    this.title = '';
    this.form = this.formBuilder.group({
      id: [null],
      caixa:[null],
      usuario: [null],
      centro_custo: [null],
      id_pessoa: [null],
      id_servico: [null],
      descricao: [null],
      valor: [null],
      dataMovimento: [null],

    })

    if (id) {
      this.movimentacoesService.getById(id).subscribe((movimentacao) => {
        this.title = 'Editar Movimentação ' + id;
        this.form = this.formBuilder.group({
          id: movimentacao.id,
          caixa: movimentacao.caixa.descricao,
          usuario: movimentacao.usuario.nome,
          centro_custo: movimentacao.caixa.empresa.razaoSocial,
          descricao: movimentacao.descricao,
          valor: movimentacao.valor,
          tipoMovimentacao: movimentacao.tipoMovimento,
          dataMovimentacao: movimentacao.dataMovimento
        })
      });
    } else {
      this.title = 'Nova Movimentação';
    }

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.caixasService.save(this.form.value)
      .subscribe(
      result => {
        this.onSucess();
      },
      error => {
        this.onError(error);
      })
  }

  onCancel(){
    this.location.back();
  }


  onSucess(){
    this.snackBar.open('Caixa salva com sucesso', '', {duration: 5000})
    this.onCancel();
  }

  onError(error: HttpErrorResponse){
    this.snackBar.open('Erro ao salvar Movimentacao', '', {duration: 5000})
  }

}
