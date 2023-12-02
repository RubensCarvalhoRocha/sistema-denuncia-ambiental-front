import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAnalistaComponent } from './consulta-analista/consulta-analista.component';
import { AnalisarComponent } from './analisar/analisar.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    { path: '', component: ConsultaAnalistaComponent },
  ];

@NgModule({
  declarations: [ConsultaAnalistaComponent, AnalisarComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class AnalistaModule { }
