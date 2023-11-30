import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
 // Substitua pelo caminho correto
import { MatSnackBar } from '@angular/material/snack-bar';
import { DenuncianteService } from '../denunciante.service';

@Component({
  selector: 'app-denunciar',
  templateUrl: './denunciar.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DenunciarComponent implements OnInit {
  @ViewChild('supportNgForm') supportNgForm: NgForm;

  alert: any;
  denunciaForm: UntypedFormGroup;

  municipiosGoias = [
    'Abadia de Goiás',
    'Abadiânia',
    'Acreúna',
  ];

  categorias = [
    { id: 0, nome: 'FAUNA' },
    { id: 1, nome: 'FLORA' },
    { id: 2, nome: 'POLUIÇÃO' },
    { id: 3, nome: 'ORDENAMENTO URBANO E PATRIMÔNIO CULTURAL' },
    { id: 4, nome: 'ADMINISTRAÇÃO AMBIENTAL' }
  ];

  subCategorias = [
    { id: 0, nome: 'transporte e comercialização de animais' },
    { id: 1, nome: 'Pesca ilegal' },
    { id: 2, nome: 'Caça ilegal' },
    { id: 3, nome: 'Ferir, praticar maus-tratos' },
    { id: 4, nome: 'Experiências que possam causar dor' },
    { id: 5, nome: 'Emissão de efluentes, substâncias tóxicas' }
  ];

  /**
   * Constructor
   */
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private denuncianteService: DenuncianteService,
    private _snackBar: MatSnackBar
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.denunciaForm = this._formBuilder.group({
      provavelAutor: ['', Validators.required],
      rua: ['', Validators.required],
      municipio: ['', Validators.required],
      CEP: ['', Validators.required],
      pontoReferencia: ['', Validators.required],
      bairro: ['', Validators.required],
      data: ['', Validators.required],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      categoriaPai: ['', Validators.required],
      categoriaFilha: ['', Validators.required]
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Clear the form
   */
  clearForm(): void {
    // Reset the form
    this.supportNgForm.resetForm();
  }

  /**
   * Send the form
   */
  sendForm(): void {
    // Envia os dados do formulário para o backend via POST
    this.denuncianteService.postDenuncia(this.denunciaForm).subscribe(
      () => {
        console.log('Formulário enviado com sucesso!');
        console.log('Formulário enviado:', this.denunciaForm.value);

        // Mostra uma mensagem de sucesso
        this._snackBar.open('Sua denúncia foi enviada com sucesso!', 'Fechar', {
          duration: 5000,
          panelClass: 'success-snackbar'
        });

        // Limpa o formulário
        this.clearForm();
      },
      (error) => {
        console.error('Erro ao enviar o formulário:', error);

        // Mostra uma mensagem de erro
        this._snackBar.open('Ocorreu um erro ao enviar sua denúncia. Por favor, tente novamente mais tarde.', 'Fechar', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    );
  }
}
