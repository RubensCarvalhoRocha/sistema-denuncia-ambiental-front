import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DramaComponent } from './drama.component';

const routes: Routes = [
  { path: 'movies', component: DramaComponent },
];

@NgModule({
  declarations: [DramaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DramaModule { }
