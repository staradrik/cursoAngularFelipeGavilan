import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { peliculaDTO, peliculaCreacionDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class EditarPeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  modelo: peliculaDTO;
  generosSeleccionados: MultipleSelectorModel[];
  generosNoSeleccionados: MultipleSelectorModel[];
  cinesSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];
  actoresSeleccionados: actorPeliculaDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.putGet(params.id)
      .subscribe(peliculaPutGet => {
        this.modelo = peliculaPutGet.pelicula;

        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero => {
          return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
        });

        this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero => {
          return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
        });
  
        this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cines => {
          return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
        });

        this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cines => {
          return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
        });

        this.actoresSeleccionados = peliculaPutGet.actores;
      });
    })
  }

  guardarCambios(pelicula: peliculaCreacionDTO){
    this.peliculasService.editar(this.modelo.id, pelicula)
    .subscribe(() => this.router.navigate(['/peliculas/' + this.modelo.id]))
  }


}
