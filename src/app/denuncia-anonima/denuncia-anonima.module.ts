import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenunciaAnonimaComponent } from './denuncia-anonima.component';
import { Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: DenunciaAnonimaComponent },
  ];


@NgModule({
  declarations: [DenunciaAnonimaComponent],
  imports: [
    CommonModule
  ]
})
export class DenunciaAnonimaModule { }
