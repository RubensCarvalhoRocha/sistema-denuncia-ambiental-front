import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Denuncias } from 'app/models/Denuncias';
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

    patchDenuncia(idDenuncia: number, analiseForm: any): Observable<any> {
        const url = `${this.url}/denuncia/parecer-tecnico/${idDenuncia}`;
        return this.Http.patch(url, analiseForm);
      }
}
