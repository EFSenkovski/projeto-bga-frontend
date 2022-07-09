import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css'],
})
export class FormUsuariosComponent implements OnInit {
  form: FormGroup;
  hide = true;
  title: string;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = '';
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      email: [null],
      senha: [null],
      administrador: [null],
      ativo: [null],
    });
    if (id) {
      this.usuarioService.getById(id).subscribe((usuario) => {
        this.title = 'Editar Usuário(a) ' + id;
        this.form = this.formBuilder.group({
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          senha: [null],
          administrador: usuario.administrador,
          ativo: usuario.ativo,
        });
      });
    } else {
      this.title = 'Novo(a) Usuário(a)';
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    this.usuarioService.save(this.form.value).subscribe(
      (result) => {
        this.onSucess();
      },
      (error) => {
        this.onError(error);
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  onSucess() {
    this.snackBar.open('Usuário salvo com sucesso', '', { duration: 5000 });
    this.onCancel();
  }

  onError(error: HttpErrorResponse) {
    this.snackBar.open('Erro ao salvar usuário', '', { duration: 5000 });
  }
}
