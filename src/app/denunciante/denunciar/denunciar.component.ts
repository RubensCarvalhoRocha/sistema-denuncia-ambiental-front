import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { catchError } from 'rxjs/operators';
 // Substitua pelo caminho correto
import { DenuncianteService } from '../denunciante.service';
import { AdicionarFotoComponent } from '../adicionar-foto/adicionar-foto.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


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
  imagemBase64: string | null = null;

  loadingSave: boolean;
  concluido: boolean = false;
  loading: boolean = false;
  droppedFileName: string = '';

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

  subcategoriasPorCategoria = {
    0: [
        { id: 0, nome: 'Transporte e comercialização de animais' },
        { id: 1, nome: 'Pesca ilegal' },
        { id: 2, nome: 'Caça ilegal' },
        { id: 3, nome: 'Ferir, praticar maus-tratos' },
        { id: 4, nome: 'Experiências que possam causar dor' },
        { id: 5, nome: 'Emissão de efluentes, substâncias tóxicas' }
    ],
    1: [
        { id: 6, nome: 'Destruir ou danificar florestas de preservação permanente' },
        { id: 7, nome: 'Destruir ou danificar qualquer vegetação do Bioma Mata Atlântica.' },
        { id: 8, nome: 'Cortar árvores em florestas de preservação permanente' },
        { id: 9, nome: 'Fabricar, vender, transportar ou soltar balões que podem provocar incêndios.' },
        { id: 10, nome: 'Danificar, por qualquer meio, plantas' },
    ],

    2: [
        { id: 11, nome: 'Causar poluição atmosférica' },
        { id: 12, nome: 'Dificultar ou impedir o uso público das praias.' },
        { id: 13, nome: 'Realizar pesquisa, lavra ou extração de recursos minerais sem autorização legal.' },
        { id: 14, nome: 'Produzir, processar,usar substância tóxica perigosa, ou nociva à saúde humana ou ao meio ambiente' },
        { id: 15, nome: 'Construir, reformar, obras ou serviços potencialmente poluidores, sem licença.' },
        { id: 16, nome: 'Disseminar doença ou praga que cause dano à agricultura, pecuária, fauna...' }
      ],

      3: [
        { id: 17, nome: 'Pixação em áreas urbanas.' },
        { id: 18, nome: 'Alterar o aspecto ou estrutura protegidos em razão do seu valor paisagístico, ecológico...' },
        { id: 19, nome: 'Mineração, Ruído e Vibração Industrial.' },
      ],

      4:[
        { id: 20, nome: 'Práticas como afirmações falsas ou enganosas.' },
        { id: 21, nome: 'Concessões de licenças, autorizações pelos funcionários em desacordo com as normas ambientais.' },
        { id: 22, nome: 'Outros' },
      ]

    };


  /**
   * Constructor
   */
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private denuncianteService: DenuncianteService,
    private _dialog: MatDialog,
    private datePipe: DatePipe
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
      categoriaFilha: ['', Validators.required],
      foto1: ['', Validators.required],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagemBase64 = reader.result as string;
      // Atualize o valor do campo 'foto1' no seu formulário
      this.denunciaForm.get('foto1').setValue(this.imagemBase64);
    };
    reader.readAsDataURL(file);
  }

  onCategoriaChange() {
    this.denunciaForm.get('categoriaFilha').setValue(null)
  }

  getSubcategorias(): any[] {
    const categoriaSelecionada = this.denunciaForm.get('categoriaPai').value;
    return this.subcategoriasPorCategoria[categoriaSelecionada] || [];
  }


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
    // Verifica se o formulário é válido antes de enviar
    if (this.denunciaForm.valid) {

         // Formata a data para o formato yyyy-MM-dd
         const formattedDate = this.datePipe.transform(this.denunciaForm.value.data, 'yyyy-MM-dd');

         // Atualiza a propriedade 'data' no formulário com a data formatada
         this.denunciaForm.patchValue({ data: formattedDate });

         console.log('Conteúdo do formulário:', this.denunciaForm.value);

        // Chama o serviço DenuncianteService para enviar os dados do formulário
        this.denuncianteService.postDenuncia(this.denunciaForm)
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

    openDialog(): void {
        const dialogRef = this._dialog.open(AdicionarFotoComponent, {
          width: '80%',
          height: 'auto',
          disableClose: true,
        });
      }

}
