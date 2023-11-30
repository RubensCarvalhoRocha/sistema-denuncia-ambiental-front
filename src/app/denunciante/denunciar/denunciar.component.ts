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

    municipiosGoias = [
        'Abadia de Goiás',
        'Abadiânia',
        'Acreúna',
        'Adelândia',
        'Água Fria de Goiás',
        'Água Limpa',
        'Águas Lindas de Goiás',
        'Alexânia',
        'Aloândia',
        'Alto Horizonte',
        'Alto Paraíso de Goiás',
        'Alvorada do Norte',
        'Amaralina',
        'Americano do Brasil',
        'Amorinópolis',
        'Anápolis',
        'Anhanguera',
        'Anicuns',
        'Aparecida de Goiânia',
        'Aparecida do Rio Doce',
        'Aporé',
        'Araçu',
        'Aragarças',
        'Aragoiânia',
        'Araguapaz',
        'Arenópolis',
        'Aruanã',
        'Aurilândia',
        'Avelinópolis',
        'Baliza',
        'Barro Alto',
        'Bela Vista de Goiás',
        'Bom Jardim de Goiás',
        'Bom Jesus de Goiás',
        'Bonfinópolis',
        'Bonópolis',
        'Brazabrantes',
        'Britânia',
        'Buriti Alegre',
        'Buriti de Goiás',
        'Buritinópolis',
        'Cabeceiras',
        'Cachoeira Alta',
        'Cachoeira de Goiás',
        'Cachoeira Dourada',
        'Caçu',
        'Caiapônia',
        'Caldas Novas',
        'Caldazinha',
        'Campestre de Goiás',
        'Campinaçu',
        'Campinorte',
        'Campo Alegre de Goiás',
        'Campo Limpo de Goiás',
        'Campos Belos',
        'Campos Verdes',
        'Carmo do Rio Verde',
        'Castelândia',
        'Catalão',
        'Caturaí',
        'Cavalcante',
        'Ceres',
        'Cezarina',
        'Chapadão do Céu',
        'Cidade Ocidental',
        'Cocalzinho de Goiás',
        'Colinas do Sul',
        'Córrego do Ouro',
        'Corumbá de Goiás',
        'Corumbaíba',
        'Cristalina',
        'Cristianópolis',
        'Crixás',
        'Cromínia',
        'Cumari',
        'Damianópolis',
        'Damolândia',
        'Davinópolis',
        'Diorama',
        'Divinópolis de Goiás',
        'Doverlândia',
        'Edealina',
        'Edéia',
        'Estrela do Norte',
        'Faina',
        'Fazenda Nova',
        'Firminópolis',
        'Flores de Goiás',
        'Formosa',
        'Formoso',
        'Gameleira de Goiás',
        'Goianápolis',
        'Goiandira',
        'Goianésia',
        'Goiânia',
        'Goianira',
        'Goiás',
        'Goiatuba',
        'Gouvelândia',
        'Guapó',
        'Guaraíta',
        'Guarani de Goiás',
        'Guarinos',
        'Heitoraí',
        'Hidrolândia',
        'Hidrolina',
        'Iaciara',
        'Inaciolândia',
        'Indiara',
        'Inhumas',
        'Ipameri',
        'Ipiranga de Goiás',
        'Iporá',
        'Israelândia',
        'Itaberaí',
        'Itaguari',
        'Itaguaru',
        'Itajá',
        'Itapaci',
        'Itapirapuã',
        'Itapuranga',
        'Itarumã',
        'Itauçu',
        'Itumbiara',
        'Ivolândia',
        'Jandaia',
        'Jaraguá',
        'Jataí',
        'Jaupaci',
        'Jesúpolis',
        'Joviânia',
        'Jussara',
        'Lagoa Santa',
        'Leopoldo de Bulhões',
        'Luziânia',
        'Mairipotaba',
        'Mambaí',
        'Mara Rosa',
        'Marzagão',
        'Matrinchã',
        'Maurilândia',
        'Mimoso de Goiás',
        'Minaçu',
        'Mineiros',
        'Moiporá',
        'Monte Alegre de Goiás',
        'Montes Claros de Goiás',
        'Montividiu',
        'Montividiu do Norte',
        'Morrinhos',
        'Morro Agudo de Goiás',
        'Mossâmedes',
        'Mozarlândia',
        'Mundo Novo',
        'Mutunópolis',
        'Nazário',
        'Nerópolis',
        'Niquelândia',
        'Nova América',
        'Nova Aurora',
        'Nova Crixás',
        'Nova Glória',
        'Nova Iguaçu de Goiás',
        'Nova Roma',
        'Nova Veneza',
        'Novo Brasil',
        'Novo Gama',
        'Novo Planalto',
        'Orizona',
        'Ouro Verde de Goiás',
        'Ouvidor',
        'Padre Bernardo',
        'Palestina de Goiás',
        'Palmeiras de Goiás',
        'Palmelo',
        'Palminópolis',
        'Panamá',
        'Paranaiguara',
        'Paraúna',
        'Perolândia',
        'Petrolina de Goiás',
        'Pilar de Goiás',
        'Piracanjuba',
        'Piranhas',
        'Pirenópolis',
        'Pires do Rio',
        'Planaltina',
        'Pontalina',
        'Porangatu',
        'Porteirão',
        'Portelândia',
        'Posse',
        'Professor Jamil',
        'Quirinópolis',
        'Rialma',
        'Rianápolis',
        'Rio Quente',
        'Rio Verde',
        'Rubiataba',
        'Sanclerlândia',
        'Santa Bárbara de Goiás'
    ];

    categorias = [
        { id: 0, nome: 'FAUNA' },
        { id: 1, nome: 'FLORA' },
        { id: 2, nome: 'POLUIÇÃO' },
        { id: 3, nome: 'ORDENAMENTO URBANO E PATRIMÔNIO CULTURAL' },
        { id: 4, nome: 'ADMINISTRAÇÃO AMBIENTAL' }
      ];

      subCategorias= [
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
            municipio  : ['', Validators.required],
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

