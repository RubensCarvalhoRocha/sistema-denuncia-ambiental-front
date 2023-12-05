import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getPortuguesePaginatorIntl } from './pt-br-paginator-intl';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        FormsModule, //add
        HttpClientModule,//add

        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,


        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        NgxMaskModule.forRoot(),

    ],
    bootstrap   : [
        AppComponent
    ],

    providers   : [
        { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
    ]
})
export class AppModule
{
}
