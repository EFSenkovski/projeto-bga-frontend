import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FormMovimentacoesComponent } from './components/form-movimentacoes/form-movimentacoes.component';
import { ListaMovimentacoesComponent } from './components/lista-movimentacoes/lista-movimentacoes.component';
import { MovimentacoesRoutingModule } from './movimentacoes-routing.module';


@NgModule({
  declarations: [
    ListaMovimentacoesComponent,
    FormMovimentacoesComponent
  ],
  imports: [
    CommonModule,
    MovimentacoesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MovimentacoesModule { }
