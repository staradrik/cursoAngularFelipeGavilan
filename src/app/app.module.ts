import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material/material.module';
import {MarkdownModule} from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormulariosActoresComponent } from './actores/formularios-actores/formularios-actores.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FormularioPeliculasComponent } from './peliculas/formulario-peliculas/formulario-peliculas.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { MenuComponent } from './menu/menu.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';






@NgModule({
  declarations: [
    AppComponent,
    AutocompleteActoresComponent,
    CrearActorComponent,
    CrearCineComponent,
    CrearGeneroComponent,
    CrearPeliculaComponent,
    EditarActorComponent,
    EditarCinesComponent,
    EditarGenerosComponent,
    EditarPeliculasComponent,  
    FiltroPeliculasComponent,
    FormulariosActoresComponent,
    FormularioCineComponent,
    FormularioGeneroComponent,
    FormularioPeliculasComponent,   
    IndiceActoresComponent, 
    IndiceCinesComponent,
    IndiceGenerosComponent,
    InputImgComponent,
    InputMarkdownComponent,
    LandingPageComponent,
    ListadoGenericoComponent,
    ListadoPeliculasComponent,
    MapaComponent,
    MenuComponent,
    MostrarErroresComponent, 
    RatingComponent,
    SelectorMultipleComponent       
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule, 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LeafletModule,
    MarkdownModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
