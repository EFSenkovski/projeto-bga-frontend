import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, Observable } from 'rxjs';

import { Empresa } from '../model/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/empresas';

  list(){
    return this.httpClient.get<Empresa[]>(this.API)
    .pipe(
      take(1)
    );
  }

  getById(id: string){
    return this.httpClient.get<Empresa>(this.API+"/"+id)
    .pipe(
      take(1)
    )
  }

  save(e: Empresa): Observable<Empresa>{
    const headers = new HttpHeaders()
      .append('Content-Type','application/json')
      .append('Accept','*/*')

    if (e.id) {
      return this.httpClient.put<Empresa>(this.API+"empresas/"+e.id, e, {headers})
    } else{
      return this.httpClient.post<Empresa>(this.API, e, {headers})
    }

  }


  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  findAll(){
    return this.httpClient.get<Empresa[]>(this.API + 'empresas')
    .pipe(
      take(1)
    )
  }
}
