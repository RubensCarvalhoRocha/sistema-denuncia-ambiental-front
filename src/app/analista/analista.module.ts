import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAnalistaComponent } from './consulta-analista/consulta-analista.component';
import { AnalisarComponent } from './analisar/analisar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AnalistaService } from './analista.service';
import { VisualisarComponent } from './visualisar/visualisar.component';
import { DatePipe } from '@angular/common';


export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

const routes: Routes = [
    { path: '', component: ConsultaAnalistaComponent },
    { path: 'analisar', component: AnalisarComponent },
    { path: 'visualisar', component: VisualisarComponent },
  ];

@NgModule({
  declarations: [ConsultaAnalistaComponent, AnalisarComponent, VisualisarComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    SharedModule,
    FuseAlertModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaskModule,
    MatSelectModule

  ],
  providers: [AnalistaService, DatePipe],
})
export class AnalistaModule { }
