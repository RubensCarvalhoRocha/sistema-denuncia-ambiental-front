import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { menuComponent } from 'app/modules/admin/menu/menu.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: menuComponent
    }
];

@NgModule({
    declarations: [
        menuComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class MenuModule
{
}
