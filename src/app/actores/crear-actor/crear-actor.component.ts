import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private actoreseSerive: ActoresService, private router: Router) { }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(actor: actorCreacionDTO){
    this.actoreseSerive.crear(actor)
    .subscribe(() =>{
      this.router.navigate(['/actores']);
    }, errores => this.errores = parsearErroresApi(errores) )

  }

}
