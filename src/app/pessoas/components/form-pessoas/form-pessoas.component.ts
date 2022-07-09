import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './../../../shared/components/error-dialog/error-dialog.component';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TipoPessoa } from './../../model/tipoPessoa';
import { PessoasService } from './../../services/pessoas.service';

@Component({
  selector: 'app-form-pessoas',
  templateUrl: './form-pessoas.component.html',
  styleUrls: ['./form-pessoas.component.css'],
})
export class FormPessoasComponent implements OnInit {
  form: FormGroup;
  hide = true;
  title: string = '';
  tiposPessoas: TipoPessoa[] = [];
  pessoaFisicaJuridica = [
    {id: "J", descricao: "Jurídica"},
    {id: "F", descricao: "Física"},
  ]
  ativo = [
    {id: 0, descricao: "Inativo"},
    {id: 1, descricao: "Ativo"},
  ]
  placeholders = this.getPlaceHolders('F');

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pessoaService.listTiposPessoas().subscribe((v) => {this.tiposPessoas = v;})

    this.form = this.formBuilder.group({
      id: [null],
      nomeRazaoSocial: [null],
      nomeFantasia: [null],
      pessoaFisicaJuridica: 'F',
      cpfCnpj: [null],
      rgIe: [null],
      email: [null],
      dataNascimentoFundacao: [null],
      endereco: [null],
      cidade: [null],
      cep: [null],
      uf: [null],
      telefone: [null],
      celular: [null],
      tipoPessoa: [null],
      observacao: [null],
      ativo: [null]
    });
    if (id) {
      this.pessoaService.getById(id).subscribe((pessoa) => {
        this.title = 'Editar Pessoa ' + id;
        this.form = this.formBuilder.group({
          id: pessoa.id,
          nomeRazaoSocial: pessoa.nomeRazaoSocial,
          nomeFantasia: pessoa.nomeFantasia,
          pessoaFisicaJuridica: pessoa.pessoaFisicaJuridica,
          cpfCnpj: pessoa.cpfCnpj,
          rgIe: pessoa.rgIe,
          email: pessoa.email,
          dataNascimentoFundacao: pessoa.dataNascimentoFundacao,
          endereco: pessoa.endereco,
          cidade: pessoa.cidade,
          cep: pessoa.cep,
          uf: pessoa.uf,
          telefone: pessoa.telefone,
          celular: pessoa.celular,
          tipoPessoa: pessoa.tipoPessoa.id,
          observacao: pessoa.observacao,
          ativo: pessoa.ativo
        });
      });
    } else{
      this.title = 'Nova Pessoa'
    }
  }

  onCancel(){
    this.location.back();
  }

  onSubmit(){
    let tipoSelecinado: TipoPessoa[] = [];
    tipoSelecinado = this.tiposPessoas.filter((tipo) => {
      return this.form.value.tipoPessoa === tipo.id
    })
    this.form.value.tipoPessoa = tipoSelecinado[0]
    this.pessoaService.save(this.form.value)
      .subscribe(
      result => {
        this.onSucess();
      },
      error => {
        this.onError(error);
      })
  }

  onSucess(){
    this.snackBar.open('Pessoa salva com sucesso', '', {duration: 5000})
    this.onCancel();
  }

  onError(error: HttpErrorResponse){
    this.dialog.open(ErrorDialogComponent, {
      data: {
        titulo: error.status,
        mensagem: error.message,
      },
    });
  }

  onChangePessoaJF() {
    const valor = this.form.get('pessoaFisicaJuridica')?.value as string;
    this.placeholders = this.getPlaceHolders(valor);
  }

  getPlaceHolders(pessoaFisicaJuridica?: string){
    if (pessoaFisicaJuridica === 'F'){
      return {
        plNomeRazaoSocial: "Nome",
        plNomeFantasia: 'Apelido',
        plCpfCnpj: 'CPF',
        plRgIe: 'RG',
        plDataNascimentoFundacao: 'Data Nascimento',
      };
    } else{
      return {
        plNomeRazaoSocial: "Razão Social",
        plNomeFantasia: 'Fantasia',
        plCpfCnpj: 'CNPJ',
        plRgIe: 'IE',
        plDataNascimentoFundacao: 'Data Fundação',
      };
    }
  }

  ngOnInit(): void {}
}
