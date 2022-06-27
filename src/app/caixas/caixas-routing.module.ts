import { FormCaixasComponent } from './components/form-caixas/form-caixas.component';
import { ListaCaixasComponent } from './components/lista-caixas/lista-caixas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaCaixasComponent},
  {path: 'new', component: FormCaixasComponent},
  {path: 'edit/:id', component: FormCaixasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaixasRoutingModule { }
