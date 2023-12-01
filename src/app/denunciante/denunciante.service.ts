import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Denuncias } from 'app/models/Denuncias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenuncianteService {
    //url da api
    private url: string = 'http://localhost:8080';

    constructor(private Http: HttpClient) {}

    postDenuncia(denunciaForm: UntypedFormGroup): Observable<any> {
        // Endpoint específico para cadastrar denúncias
        const endpoint = `${this.url}/denuncia/cadastrar`;

        // Faz a requisição POST enviando os dados do formulário
        return this.Http.post<any>(endpoint, denunciaForm.value);
      }
}

