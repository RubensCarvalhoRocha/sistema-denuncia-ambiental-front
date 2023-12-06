import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { DenunciarComponent } from './denunciar/denunciar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { DenuncianteService } from './denunciante.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AdicionarFotoComponent } from './adicionar-foto/adicionar-foto.component'
import { DatePipe } from '@angular/common';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

const routes: Routes = [
    { path: '', component: DenunciarComponent },
  ];

@NgModule({
  declarations: [
    DenunciarComponent,
    AdicionarFotoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FuseAlertModule,
    SharedModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
  ],

  providers: [DenuncianteService,DatePipe],
})
export class DenuncianteModule { }
