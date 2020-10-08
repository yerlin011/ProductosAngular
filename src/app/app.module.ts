import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import {ErrorComponent} from './components/error.component';
import {ProductosListComponent} from './components/productos-list.component';
import {ProductosAddComponent} from './components/productos-add.component';
//Rutas
import {RouterWithProviders,Routing } from './app.routing';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductosAddComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [RouterWithProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
