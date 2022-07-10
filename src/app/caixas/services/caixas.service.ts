import { take, Observable } from 'rxjs';
import { Caixa } from './../model/caixa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaixasService {

  constructor(private httpClient: HttpClient) {}

  private readonly API = 'https://projeto-bga-spring.herokuapp.com/caixas';

  list(){
    return this.httpClient.get<Caixa[]>(this.API)
    .pipe(
      take(1)
    );
  }

  getById(id: string){
    return this.httpClient.get<Caixa>(this.API+"/"+id)
    .pipe(
      take(1)
    )
  }

  save(e: Caixa): Observable<Caixa>{
    const headers = new HttpHeaders()
      .append('Content-Type','application/json')
      .append('Accept','*/*')

    if (e.id) {
      return this.httpClient.put<Caixa>(this.API+"/"+e.id, e, {headers})
    } else{
      return this.httpClient.post<Caixa>(this.API, e, {headers})
    }

  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  findAll(){
    return this.httpClient.get<Caixa[]>(this.API)
    .pipe(
      take(1)
    )
  }
}
