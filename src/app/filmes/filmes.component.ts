import {  Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


import { FilmesService } from './filmes.service';
import { Filmes } from 'app/models/Filmes';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import notyf from 'app/utilss/utilss';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {
  @ViewChild('filmesPaginator', { read: MatPaginator }) public filmesPaginator: MatPaginator;
  @ViewChild('filmesTable', { read: MatSort }) public filmesTableMatSort: MatSort;
  public filmesDataSource: MatTableDataSource<any> = new MatTableDataSource();
  public filmesTableColumns: string[] = ['nomeFilme', 'diretor', 'ano', 'nota', 'acoes'];

  filmes: Filmes[] = [];

  constructor(
    private filmesService: FilmesService,
    private _fuseConfirmationService: FuseConfirmationService,
    private _dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe((filmes) => {
    this.filmes = filmes;
    this.filmesDataSource.data = filmes;
    this.filmesDataSource.paginator = this.filmesPaginator;
    this.filmesDataSource.sort = this.filmesTableMatSort;
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
        this.filmesService
          .deleteFilme(id)
          .subscribe(() => {
            notyf.success('Seu certificado foi exluido com sucesso!');
            this.filmesService.getFilmes().subscribe({});
          },
          (error) => {
            console.error(error);
            notyf.error('Algo deu errado ao excluir seu certificado.');
          });
      }
    });
  }

}
