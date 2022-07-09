import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CaixasService } from './../../services/caixas.service';

@Component({
  selector: 'app-form-caixas',
  templateUrl: './form-caixas.component.html',
  styleUrls: ['./form-caixas.component.css']
})
export class FormCaixasComponent implements OnInit {

  form: FormGroup;
  hide = true;
  title: string;

  constructor(private formBuilder: FormBuilder,
    private caixasService: CaixasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = '';
    this.form = this.formBuilder.group({
      id: [null],
      empresa:[null],
      descricao: [null],
      valorAtual: [null],
      dataUltimaMovimentacao: [null],

    })

    if (id) {
      this.caixasService.getById(id).subscribe((caixa) => {
        this.title = 'Editar Caixa ' + id;
        this.form = this.formBuilder.group({
          id: caixa.id,
          empresa: caixa.empresa.razaoSocial,
          descricao: caixa.descricao,
          valorAtual: caixa.valorAtual,
          dataUltimaMovimentacao: caixa.dataUltimaMovimentacao
        })
      });
    } else {
      this.title = 'Novo Caixa';
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
    this.snackBar.open('Erro ao salvar Caixa', '', {duration: 5000})
  }

}
