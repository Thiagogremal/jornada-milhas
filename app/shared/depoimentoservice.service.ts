import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { depoimentoInterface } from './depoimentoInterface';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoserviceService {

  private readonly API= 'http://localhost:3000/depoimentos';
  constructor(private http: HttpClient) { }

  listar(): Observable<depoimentoInterface[]>{

    return this.http.get<depoimentoInterface[]>(this.API);

  }

  criar(depoimento: depoimentoInterface): Observable<depoimentoInterface> { 
    //Este método vai retornar um Observable de <Pensamento>
        return this.http.post<depoimentoInterface>(this.API, depoimento);
      }
  
      excluir(id: number): Observable<depoimentoInterface> {
        const url = `${this.API}/${id}`
        return this.http.delete<depoimentoInterface>(url);
      }
    
      buscarPorId(id: number): Observable<depoimentoInterface>{
        const url = `${this.API}/${id}`
        return this.http.get<depoimentoInterface>(url);
      }
    
      editar(depoimento: depoimentoInterface): Observable<depoimentoInterface> {
    
        const url = `${this.API}/${depoimento.id}`
        return this.http.put<depoimentoInterface>(url, depoimento)
      }

}
