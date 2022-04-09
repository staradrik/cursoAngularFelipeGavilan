import { Component, OnInit } from '@angular/core';
import { peliculaDTO, peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class EditarPeliculasComponent implements OnInit {

  constructor() { }

  modelo:peliculaDTO = {titulo: 'Tren a Busan', 'trailer':'abc',enCines:true, resumen:'zombies', 
  fechaLanzamiento: new Date(), poster: 'https://i.pinimg.com/550x/99/e7/b1/99e7b181a40edf48d43b3d00adf61a93.jpg'}

  ngOnInit(): void {
  }

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula);
  }

}
