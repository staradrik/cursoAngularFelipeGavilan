import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MarkdownModule} from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormulariosActoresComponent } from './actores/formularios-actores/formularios-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculasComponent } from './peliculas/formulario-peliculas/formulario-peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGenerosComponent,
    EditarCinesComponent,
    EditarPeliculasComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormulariosActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculasComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
