import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes.component';

const routes: Routes = [
  { path: '', component: FilmesComponent },
];

@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmesModule { }
