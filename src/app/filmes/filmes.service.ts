import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Filmes } from 'app/models/Filmes';

@Injectable({
    providedIn: 'root',
})
export class FilmesService {
    //URL da API
    private url: string = 'http://localhost:8080';

    constructor(private Http: HttpClient) {}

    getFilmes(): Observable<Filmes[]> {
        return this.Http.get<Filmes[]>(`${this.url}/`); // For retrieving all filmes
    }

    createFilme(filme: Filmes): Observable<Filmes> {
        return this.Http.post<Filmes>(`${this.url}/`, filme); // For creating a new filme
    }

    updateFilme(filme: Filmes): Observable<Filmes> {
        return this.Http.put<Filmes>(`${this.url}/`, filme); // For updating an existing filme
    }

    deleteFilme(id: number): Observable<void> {
        return this.Http.delete<void>(`${this.url}/${id}`); // For deleting a filme by id
    }
}
