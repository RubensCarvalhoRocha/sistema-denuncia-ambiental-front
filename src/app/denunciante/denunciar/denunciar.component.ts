import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { Denuncias } from 'app/models/Denuncias';


@Component({
  selector: 'app-denunciar',
  templateUrl: './denunciar.component.html',
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DenunciarComponent implements OnInit{
    @ViewChild('supportNgForm') supportNgForm: NgForm;

    alert: any;
    denunciaForm: UntypedFormGroup;

    categorias = [
        { id: 0, nome: 'FAUNA' },
        { id: 1, nome: 'FLORA' },
        { id: 2, nome: 'POLUIÇÃO' },
        { id: 3, nome: 'ORDENAMENTO URBANO E PATRIMÔNIO CULTURAL' },
        { id: 4, nome: 'ADMINISTRAÇÃO AMBIENTAL' }
      ];

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        // private _helpCenterService: HelpCenterService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        this.denunciaForm = this._formBuilder.group({
            provavelAutor   : ['', Validators.required],
            rua  : ['', Validators.required],
            CEP: ['', Validators.required],
            pontoReferencia: ['', Validators.required],
            bairro: ['', Validators.required],
            data: ['', Validators.required],
            titulo: ['', Validators.required],
            descricao: ['', Validators.required],
            latitude: ['', Validators.required],
            longitude: ['', Validators.required],
            categoriaPai: ['', Validators.required]
            // categoriaFilha: ['', Validators.required]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Clear the form
     */
    clearForm(): void
    {
        // Reset the form
        this.supportNgForm.resetForm();
    }

    /**
     * Send the form
     */
    sendForm(): void
    {
        // Send your form here using an http request
        console.log('Your message has been sent!');

        // Show a success message (it can also be an error message)
        // and remove it after 5 seconds
        this.alert = {
            type   : 'success',
            message: 'Your request has been delivered! A member of our support staff will respond as soon as possible.'
        };

        setTimeout(() => {
            this.alert = null;
        }, 7000);

        // Clear the form
        this.clearForm();
    }
}

