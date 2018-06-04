import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';

// import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModuleModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ComponentsModule,
    // PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
