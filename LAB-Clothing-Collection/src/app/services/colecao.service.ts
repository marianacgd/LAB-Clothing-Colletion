import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IColecao } from "../interfaces/colecao";

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private baseUrl = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient, private router: Router) { }

  getColecoes(): Observable<IColecao[]> {
    return this.http.get<IColecao[]>(this.baseUrl)
  }

  getColecaoPorId(id: string): Observable<IColecao> {
    return this.http.get<IColecao>(`${this.baseUrl}/${id}`)
  }

  getColecoesMaxValorTop5() {
    return this.http.get<IColecao[]>(`${this.baseUrl}?_sort=orcamento&_order=desc&_limit=5`)
  }

  postColecao(colecao: IColecao): Observable<IColecao> {
    return this.http.post<IColecao>(this.baseUrl, colecao)
  }

  putColecao(colecao: IColecao): Observable<IColecao> {
    return this.http.put<IColecao>(`${this.baseUrl}/${colecao.id}`, colecao)
  }

  deleteColecao(id: number): Observable<IColecao> {
    return this.http.delete<IColecao>(`${this.baseUrl}/${id}`)
  }
}
