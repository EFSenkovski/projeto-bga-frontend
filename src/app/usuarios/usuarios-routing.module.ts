import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/lista-usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: UsuariosComponent},
  {path: 'new', component: FormUsuariosComponent},
  {path: 'edit/:id', component: FormUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
