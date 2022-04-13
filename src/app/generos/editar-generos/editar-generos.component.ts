import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO, generoDTO } from '../genero';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerosService } from '../generos.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent implements OnInit {

  constructor(private router:Router, private generosService: GenerosService,
              private activedRoute: ActivatedRoute) { }

  modelo: generoDTO ;
  errores: string [] = [];

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      this.generosService.obtenerPorId(params.id)
      .subscribe(genero =>{
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']))
    })
  }

  

  guardarCambios(genero: generoCreacionDTO){
    this.generosService.editar(this.modelo.id, genero)
    .subscribe(() =>{
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresApi(error))
  }

}
