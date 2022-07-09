import { take, Observable } from 'rxjs';
import { CentroCusto } from './../model/centrocusto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentroscustoService {

  constructor(private httpClient: HttpClient) { }

  private readonly APICentroCustos = 'http://localhost:8080/centrocusto';

  list() {
    return this.httpClient.get<CentroCusto[]>(this.APICentroCustos).pipe(take(1));
  }

  getById(id: string) {
    return this.httpClient.get<CentroCusto>(this.APICentroCustos + '/' + id).pipe(take(1));
  }

  save(p: CentroCusto): Observable<CentroCusto> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', '*/*');

    if (p.id) {
      return this.httpClient.put<CentroCusto>(this.APICentroCustos + 'centroscusto/' + p.id, p, {
        headers,
      });
    } else {
      return this.httpClient.post<CentroCusto>(this.APICentroCustos, p, { headers });
    }
  }

  findAll() {
    return this.httpClient.get<CentroCusto[]>(this.APICentroCustos + 'CentroCustos').pipe(take(1));
  }
}
