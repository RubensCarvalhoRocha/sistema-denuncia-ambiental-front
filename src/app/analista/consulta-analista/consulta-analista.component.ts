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
@Component({
  selector: 'app-consulta-analista',
  templateUrl: './consulta-analista.component.html',
  styleUrls: ['./consulta-analista.component.scss']
})
export class ConsultaAnalistaComponent {
    @ViewChild('denunciasPaginator', { read: MatPaginator }) public denunciasPaginator: MatPaginator;
    @ViewChild('denunciasTable', { read: MatSort }) public denunciasTableMatSort: MatSort;
    public denunciasDataSource: MatTableDataSource<any> = new MatTableDataSource();
    public denunciasTableColumns: string[] = ['protocolo', 'municipio', 'categoria', 'data', 'situacao'];

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

    deletar(id: number): void {
      const confirmation = this._fuseConfirmationService.open({
        title: 'Excluir registro...',
        message: `Tem certeza que deseja excluir definitivamente este registro?`,
        actions: {
          cancel: {
            label: 'Cancelar',
          },
          confirm: {
            label: 'Deletar',
            color: 'warn',
          },
        },
      });

      confirmation.afterClosed().subscribe((result) => {
        if (result === 'confirmed') {
          this.analistaService
            .deleteFilme(id)
            .subscribe(() => {
              notyf.success('Seu certificado foi exluido com sucesso!');
              this.analistaService.getDenuncias().subscribe({});
            },
            (error) => {
              console.error(error);
              notyf.error('Algo deu errado ao excluir seu certificado.');
            });
        }
      });
    }

  }

