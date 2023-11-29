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

    getFilmes(): Observable<Denuncias[]> {
    return this.Http.get<Denuncias[]>(`${this.url}/`); // For retrieving all filmes
    }
}
