import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IModelo } from "../interfaces/modelo";
import { IColecao } from "../interfaces/colecao";

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private baseUrl = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient, private router: Router) { }

  getModelos(): Observable<IModelo[]> {
    return this.http.get<IModelo[]>(this.baseUrl)
  }

  getModelosPorId(id: string): Observable<IModelo> {
    return this.http.get<IModelo>( `${this.baseUrl}/${id}`)
  }

  getModelosPorIdColecao(idColecao: number): Observable<IModelo> {
    return this.http.get<IModelo>( `${this.baseUrl}?idColecao=${idColecao}`)
  }
  
  postModelo(modelo: IModelo): Observable<IModelo> {
    return this.http.post<IModelo>(this.baseUrl, modelo)
  }

  putModelo(modelo: IModelo): Observable<IModelo> {
    return this.http.put<IModelo>(`${this.baseUrl}/${modelo.id}`, modelo)
  }

  deleteModelo(id: number){
    return this.http.delete<IModelo>(`${this.baseUrl}/${id}`)
  }
}
