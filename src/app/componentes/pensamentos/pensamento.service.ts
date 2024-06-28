import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "https://chambray-hospitable-cacao.glitch.me/pensamentos";
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluirPensamento(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPensamentoPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

}
