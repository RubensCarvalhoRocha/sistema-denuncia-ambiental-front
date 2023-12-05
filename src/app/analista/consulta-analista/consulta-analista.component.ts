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

    denuncias: Denuncias[] = [];

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

    abrirDetalhesDenuncia(id: number) {
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

