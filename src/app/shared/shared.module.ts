import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class SharedModule { }
