import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { CaixasRoutingModule } from './caixas-routing.module';
import { FormCaixasComponent } from './components/form-caixas/form-caixas.component';
import { ListaCaixasComponent } from './components/lista-caixas/lista-caixas.component';



@NgModule({
  declarations: [
    ListaCaixasComponent,
    FormCaixasComponent
  ],
  imports: [
    CommonModule,
    CaixasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CaixasModule { }
