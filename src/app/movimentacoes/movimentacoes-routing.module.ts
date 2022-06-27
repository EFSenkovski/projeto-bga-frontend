import { FormMovimentacoesComponent } from './components/form-movimentacoes/form-movimentacoes.component';
import { ListaMovimentacoesComponent } from './components/lista-movimentacoes/lista-movimentacoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaMovimentacoesComponent},
  {path: 'new', component: FormMovimentacoesComponent},
  {path: 'edit/:id', component: FormMovimentacoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentacoesRoutingModule { }
