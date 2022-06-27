import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { EmpresasService } from './../../services/empresas.service';

@Component({
  selector: 'app-form-empresas',
  templateUrl: './form-empresas.component.html',
  styleUrls: ['./form-empresas.component.css']
})
export class FormEmpresasComponent implements OnInit {

  form: FormGroup;
  hide = true;
  title: string;

  constructor(private formBuilder: FormBuilder,
              private empresaService: EmpresasService,
              private snackBar: MatSnackBar,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = '';
    this.form = this.formBuilder.group({
      id: [null],
      razaoSocial:[null],
      nomeFantasia: [null],
      cnpj: [null],
      ie: [null],
      uf: [null],
      cidade: [null]

    })
    console.log(id);
    if (id) {
      this.empresaService.getById(id).subscribe((empresa) => {
        this.title = 'Editar Empresa ' + id;
        this.form = this.formBuilder.group({
          id: empresa.id,
          razaoSocial: empresa.razaoSocial,
          nomeFantasia: empresa.nomeFantasia,
          cnpj: empresa.cnpj,
          ie: empresa.ie,
          uf: empresa.uf,
          cidade: empresa.cidade
        })
      });
    } else {
      this.title = 'Nova Empresa';
    }

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.empresaService.save(this.form.value)
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
    this.snackBar.open('Empresa salva com sucesso', '', {duration: 5000})
    this.onCancel();
  }

  onError(error: HttpErrorResponse){
    this.snackBar.open('Erro ao salvar empresa', '', {duration: 5000})
  }


}
