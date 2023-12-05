import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Denuncias } from 'app/models/Denuncias';
import { FiltroDenuncia } from 'app/models/FiltroDenuncia';
@Injectable({
  providedIn: 'root'
})
export class AnalistaService {
    //url da api
    private url: string = 'http://localhost:8080';

    constructor(private Http: HttpClient) {}

    getDenuncias(): Observable<Denuncias[]> {
    return this.Http.get<Denuncias[]>(`${this.url}/denuncia`); // For retrieving all filmes
    }

    getDetalhesDenuncia(id: number): Observable<any> {
        return this.Http.get(`${this.url}/denuncia/${id}`);
      }

    patchDenuncia(idDenuncia: number, analiseForm: any): Observable<any> {
        const url = `${this.url}/denuncia/parecer-tecnico/${idDenuncia}`;
        return this.Http.patch(url, analiseForm);
      }

      getDenunciasComFiltros(filtro: FiltroDenuncia): Observable<Denuncias[]> {
        // Construa os parâmetros de consulta com base no filtro fornecido
        const params = new HttpParams({
          fromObject: filtro as any
        });

        // Faça a solicitação GET com os parâmetros de consulta
        return this.Http.get<Denuncias[]>(`${this.url}/denuncia/filtros`, { params });
      }
}
