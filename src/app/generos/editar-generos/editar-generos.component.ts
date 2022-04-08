import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent  {

  constructor(private router:Router) { }
  modelo: generoCreacionDTO ={nombre: 'Suspenso'}

  guardarCambios(genero: generoCreacionDTO){
    console.log(genero);
    this.router.navigate(['/generos'])
  }

}
