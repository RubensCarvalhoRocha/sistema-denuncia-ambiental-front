import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Denuncias } from 'app/models/Denuncias';
import { FiltroDenuncia } from 'app/models/FiltroDenuncia';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AnalistaService {
    private denunciaDetalhada: BehaviorSubject<any>=new BehaviorSubject(null)

    //url da api
    private url: string = 'http://localhost:8080';

    constructor(private Http: HttpClient, private datePipe: DatePipe) {}

    getDenuncias(): Observable<Denuncias[]> {
    return this.Http.get<Denuncias[]>(`${this.url}/denuncia`); // For retrieving all filmes
    }

    getDetalhesDenuncia(id: number): Observable<any> {
        return this.Http.get(`${this.url}/denuncia/${id}`).pipe(
            tap(res=>{
                this.denunciaDetalhada.next({id, ...res})
            })
        )
      }

    patchDenuncia(idDenuncia: number, analiseForm: any): Observable<any> {
        const url = `${this.url}/denuncia/parecer-tecnico/${idDenuncia}`;
        return this.Http.patch(url, analiseForm);
      }

      getDenunciasComFiltros(filtro: FiltroDenuncia): Observable<Denuncias[]> {
        filtro.data = this.formatarDataParaBackend(filtro.data);

        // Construa os parâmetros de consulta com base no filtro fornecido
        const params = new HttpParams({
          fromObject: filtro as any
        });

        // Faça a solicitação GET com os parâmetros de consulta
        return this.Http.get<Denuncias[]>(`${this.url}/denuncia/filtros`, { params });
      }

      private formatarDataParaBackend(data: string): string {
        // Utilize o datePipe para formatar a data
        return this.datePipe.transform(data, 'yyyy-MM-dd') || '';
      }

      get denunciaDetalhada$(){
        return this.denunciaDetalhada.asObservable()
      }
}
