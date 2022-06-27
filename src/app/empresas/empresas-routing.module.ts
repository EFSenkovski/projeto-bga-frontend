import { FormEmpresasComponent } from './components/form-empresas/form-empresas.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaEmpresasComponent},
  {path: 'new', component: FormEmpresasComponent},
  {path: 'edit/:id', component: FormEmpresasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
