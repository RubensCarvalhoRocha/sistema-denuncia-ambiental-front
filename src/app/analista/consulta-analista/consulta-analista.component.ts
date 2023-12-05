import {  Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { FuseConfirmationService } from '@fuse/services/confirmation';
import notyf from 'app/utilss/utilss';
import { AnalistaService } from '../analista.service';
import { Denuncias } from 'app/models/Denuncias';
import { AnalisarComponent } from '../analisar/analisar.component';
import { Subject } from 'rxjs';
import { FiltroDenuncia } from 'app/models/FiltroDenuncia';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-consulta-analista',
  templateUrl: './consulta-analista.component.html',
  styleUrls: ['./consulta-analista.component.scss']
})
export class ConsultaAnalistaComponent {
    @ViewChild('denunciasPaginator', { read: MatPaginator }) public denunciasPaginator: MatPaginator;
    @ViewChild('denunciasTable', { read: MatSort }) public denunciasTableMatSort: MatSort;
    public denunciasDataSource: MatTableDataSource<any> = new MatTableDataSource();
    public denunciasTableColumns: string[] = ['id', 'municipio', 'categoriaPai', 'status', 'data', 'acoes'];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    categorias = [
        { id: 0, nome: 'FAUNA' },
        { id: 1, nome: 'FLORA' },
        { id: 2, nome: 'POLUIÇÃO' },
        { id: 3, nome: 'ORDENAMENTO URBANO E PATRIMÔNIO CULTURAL' },
        { id: 4, nome: 'ADMINISTRAÇÃO AMBIENTAL' }
      ];

      situacao = [
        { id: 0, nome: 'EM ABERTO' },
        { id: 1, nome: 'EM ANDAMENTO' },
        { id: 2, nome: 'FINALIZADO' },
      ];

    public txtDenuncia: string;

    denuncias: Denuncias[] = [];

    public resetFiltro: FiltroDenuncia= {
        categoriaPai: "",
        protocolo: "",
        municipio:"",
        status:"",
        token:"",
        data:"",

      };

      public filtro: FiltroDenuncia = cloneDeep(this.resetFiltro);

    constructor(
      private analistaService: AnalistaService,
      private _fuseConfirmationService: FuseConfirmationService,
      private _dialog: MatDialog,
      private _changeDetectorRef: ChangeDetectorRef,) {}

    ngOnInit(): void {
      this.analistaService.getDenuncias().subscribe((denuncias) => {
      this.denuncias = denuncias;
      this.denunciasDataSource.data = denuncias;
      this.denunciasDataSource.paginator = this.denunciasPaginator;
      this.denunciasDataSource.sort = this.denunciasTableMatSort;
      this._changeDetectorRef.detectChanges();
      });
    }

    carregarDenuncias(): void {
        this.analistaService.getDenunciasComFiltros(this.filtro).subscribe((denuncias) => {
          this.denuncias = denuncias;
          this.denunciasDataSource.data = denuncias;
          this.denunciasDataSource.paginator = this.denunciasPaginator;
          this.denunciasDataSource.sort = this.denunciasTableMatSort;
          this._changeDetectorRef.detectChanges();
        });
      }

      filtrar(): void {
        this.carregarDenuncias();
      }

    limparFiltros(): void {
        this.filtro = { ...this.resetFiltro };
        this.filtrar()
      }

    abrirDetalhesDenuncia(id: number) {
        console.log(id);
        this.analistaService.getDetalhesDenuncia(id).subscribe(
          (detalhes) => {
            // Manipular os detalhes da denúncia aqui (por exemplo, exibir em um modal)
            console.log(detalhes);
          },
          (erro) => {
            console.error('Erro ao obter detalhes da denúncia', erro);
          }
        );
      }

  }

