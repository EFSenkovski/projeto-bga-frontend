import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormServicosComponent } from './components/form-servicos/form-servicos.component';
import { ListaServicosComponent } from './components/lista-servicos/lista-servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';


@NgModule({
  declarations: [
    FormServicosComponent,
    ListaServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
