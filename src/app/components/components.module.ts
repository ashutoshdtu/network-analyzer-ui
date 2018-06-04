import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
} from '@angular/material';
import { ProcessTableComponent } from './process-table/process-table.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
  ],
  exports: [NavbarComponent, ProcessTableComponent, ThemeSwitcherComponent],
  declarations: [NavbarComponent, ProcessTableComponent, ThemeSwitcherComponent]
})
export class ComponentsModule { }
