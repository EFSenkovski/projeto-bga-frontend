import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FormPessoasComponent } from './components/form-pessoas/form-pessoas.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { PessoasRoutingModule } from './pessoas-routing.module';



@NgModule({
  declarations: [
    ListaPessoasComponent,
    FormPessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PessoasModule { }
