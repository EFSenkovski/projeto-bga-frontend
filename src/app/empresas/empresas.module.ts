import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FormEmpresasComponent } from './components/form-empresas/form-empresas.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';


@NgModule({
  declarations: [
    ListaEmpresasComponent,
    FormEmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
