import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [{
            path: '404',
            component: NotFoundComponent,
        }, {
            path: 'home',
            component: HomeComponent,
        }, {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        }],
    },
    // {
    //     path: '**',
    //     redirectTo: '/404'
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
