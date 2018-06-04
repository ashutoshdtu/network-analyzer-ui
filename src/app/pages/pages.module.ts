import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
  ],
})
export class PagesModule { }
