import { take, Observable } from 'rxjs';
import { Movimentacao } from './../model/movimentacao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/movimentacoes';

  list(){
    return this.httpClient.get<Movimentacao[]>(this.API)
    .pipe(
      take(1)
    );
  }

  getById(id: string){
    return this.httpClient.get<Movimentacao>(this.API+"/"+id)
    .pipe(
      take(1)
    )
  }

  save(e: Movimentacao): Observable<Movimentacao>{
    const headers = new HttpHeaders()
      .append('Content-Type','application/json')
      .append('Accept','*/*')

    if (e.id) {
      return this.httpClient.put<Movimentacao>(this.API+"/"+e.id, e, {headers})
    } else{
      return this.httpClient.post<Movimentacao>(this.API, e, {headers})
    }

  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  findAll(){
    return this.httpClient.get<Movimentacao[]>(this.API)
    .pipe(
      take(1)
    )
  }


}
