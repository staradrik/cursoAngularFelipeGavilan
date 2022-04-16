import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EsAdminGuard } from './es-admin.guard';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { LoginComponent } from './seguridad/login/login.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'generos', component: IndiceGenerosComponent, canActivate: [EsAdminGuard]},
  {path:'generos/crear', component: CrearGeneroComponent, canActivate: [EsAdminGuard]},
  {path:'generos/editar/:id', component:EditarGenerosComponent, canActivate: [EsAdminGuard]},
  {path:'actores', component: IndiceActoresComponent, canActivate: [EsAdminGuard]},
  {path:'actores/crear', component: CrearActorComponent, canActivate: [EsAdminGuard]},
  {path:'actores/editar/:id', component: EditarActorComponent, canActivate: [EsAdminGuard]},
  {path:'cines', component:IndiceCinesComponent, canActivate: [EsAdminGuard]},
  {path:'cines/crear', component: CrearCineComponent, canActivate: [EsAdminGuard]},
  {path:'cines/editar/:id', component: EditarCinesComponent, canActivate: [EsAdminGuard]},
  {path:'peliculas/crear', component: CrearPeliculaComponent, canActivate: [EsAdminGuard]},
  {path:'peliculas/editar/:id', component: EditarPeliculasComponent, canActivate: [EsAdminGuard]},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  {path: 'peliculas/:id', component: DetallePeliculaComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
