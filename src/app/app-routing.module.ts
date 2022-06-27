import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { LoginComponent } from './shared/components/login/login/login.component';
import { GuardGuard } from './usuarios/guard.guard';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then (m => m.UsuariosModule)
      },
      {
        path: 'empresas',
        loadChildren: () => import('./empresas/empresas.module').then (m => m.EmpresasModule)
      },
      {
        path: 'caixas',
        loadChildren: () => import('./caixas/caixas.module').then (m => m.CaixasModule)
      },
      {
        path: 'movimentacoes',
        loadChildren: () => import('./movimentacoes/movimentacoes.module').then (m => m.MovimentacoesModule)
      },
    ],
    canActivate: [GuardGuard]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
