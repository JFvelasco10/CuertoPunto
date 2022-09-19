import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TargetaProyeccionComponent } from './tarjeta-proyeccion/tarjeta-proyeccion.component';
import { UsarProyeccionComponent } from './usar-proyeccion/usar-proyeccion.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetaProyeccionComponent,
    UsarProyeccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
