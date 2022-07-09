import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPessoasComponent } from './components/form-pessoas/form-pessoas.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  {path: '', component: ListaPessoasComponent},
  {path: 'new', component: FormPessoasComponent},
  {path: 'edit/:id', component: FormPessoasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
