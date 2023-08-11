import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { Filmes } from 'app/models/Filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {
  filmes: Filmes[] = [];

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}
