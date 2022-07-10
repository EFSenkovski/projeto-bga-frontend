import { TipoPessoa } from './../model/tipoPessoa';
import { delay, take, Observable } from 'rxjs';
import { Pessoa } from './../model/pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  constructor(private httpClient: HttpClient) {}

  private readonly APIPessoas = 'https://projeto-bga-spring.herokuapp.com/pessoas';
  private readonly APITiposPessoas = 'https://projeto-bga-spring.herokuapp.com/tipospessoa';

  list() {
    return this.httpClient.get<Pessoa[]>(this.APIPessoas).pipe(take(1));
  }

  listByNome(nome: String){
    return this.httpClient.get<Pessoa[]>(this.APIPessoas+"/filtrar?nome="+nome).pipe(take(1));
  }

  listTiposPessoas() {
    return this.httpClient.get<TipoPessoa[]>(this.APITiposPessoas).pipe(take(1));
  }

  getById(id: string) {
    return this.httpClient.get<Pessoa>(this.APIPessoas + '/' + id).pipe(take(1));
  }

  save(p: Pessoa): Observable<Pessoa> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', '*/*');

    if (p.id) {
      p.dataHoraAtualizacao = new Date();
      return this.httpClient.put<Pessoa>(this.APIPessoas + "/" + p.id, p, {
        headers,
      });
    } else {
      p.dataHoraCriacao = new Date();
      p.dataHoraAtualizacao = new Date();
      return this.httpClient.post<Pessoa>(this.APIPessoas, p, { headers });
    }
  }

  delete(p: Pessoa): Observable<number>{
    p.dataHoraAtualizacao = new Date();
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', '*/*');

    return this.httpClient.delete<number>(this.APIPessoas + "/" + p.id , {headers});

  }

  findAll() {
    return this.httpClient.get<Pessoa[]>(this.APIPessoas + 'pessoas').pipe(take(1));
  }
}
