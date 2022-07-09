import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CentroscustoRoutingModule } from './centroscusto-routing.module';
import { FormCentroscustoComponent } from './components/form-centroscusto/form-centroscusto.component';
import { ListaCentroscustoComponent } from './components/lista-centroscusto/lista-centroscusto.component';


@NgModule({
  declarations: [
    FormCentroscustoComponent,
    ListaCentroscustoComponent
  ],
  imports: [
    CommonModule,
    CentroscustoRoutingModule
  ]
})
export class CentroscustoModule { }
