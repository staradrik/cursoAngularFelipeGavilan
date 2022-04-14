import { Component, OnInit } from '@angular/core';
import { peliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor(private peliculasService: PeliculasService){}

  ngOnInit(): void {
    this.cargarDatos();
  }
  peliculasEnCines: peliculaDTO[];
  peliculasProximosEstrenos: peliculaDTO[];

  cargarDatos(){
    this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculasEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
    });
  }

  borrado(){
    this.cargarDatos();
  }
}


