import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { Denuncias } from 'app/models/Denuncias';
import { catchError } from 'rxjs/operators';
import { AnalistaService } from '../analista.service';

@Component({
  selector: 'app-analisar',
  templateUrl: './analisar.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AnalisarComponent implements OnInit{
    @ViewChild('supportNgForm') supportNgForm: NgForm;

    alert: any;
    analiseForm: UntypedFormGroup;

    public denuncias: Denuncias = new Denuncias();

    currentStatus: number;

    status = [
        { id: 0, nome: 'EM ABERTO' },
        { id: 1, nome: 'EM ANDAMENTO' },
        { id: 2, nome: 'FINALIZADO' },
      ];

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private analistaService: AnalistaService,
      ) {}

      ngOnInit(): void {
        this.analiseForm = this._formBuilder.group({
          parecerTecnico: ['', Validators.required],
          status: ['', Validators.required],
        });
        this.currentStatus = this.denuncias.status
      }

      sendForm(): void {
        // Verifica se o formulário é válido antes de enviar
        if (this.analiseForm.valid) {
            console.log('Conteúdo do formulário:', this.analiseForm.value);

            // Suponha que você tenha o ID da denúncia disponível no objeto 'denuncia'
            const idDenuncia = this.denuncias.id; // Substitua 'id' pelo nome correto do campo ID em Denuncias

            // Chama o serviço AnalistaService para enviar os dados do formulário
            this.analistaService.patchDenuncia(idDenuncia, this.analiseForm.value)
                .pipe(
                    // Trata possíveis erros na chamada HTTP
                    catchError(error => {
                        console.error('Error sending the form:', error);
                        // Pode mostrar uma mensagem de erro para o usuário se desejar
                        return [];
                    })
                )
                .subscribe(response => {
                    // Exibe uma mensagem de sucesso (ou de erro) para o usuário
                    this.alert = {
                        type: response.success ? 'success' : 'error',
                        message: response.message
                    };

                    // Remove a mensagem após alguns segundos
                    setTimeout(() => {
                        this.alert = null;
                    }, 5000);

                    // Limpa o formulário se a denúncia foi enviada com sucesso
                    if (response.success) {
                        this.clearForm();
                    }
                });
        } else {
            // Se o formulário não for válido, você pode exibir uma mensagem ou tomar outra ação
            console.warn('Form is not valid. Please fill in all required fields.');
        }
    }


    clearForm(): void {
        // Reset the form
        this.supportNgForm.resetForm();
        }

}
