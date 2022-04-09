import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  modelo: actorDTO={nombre: 'Adri', fechaNacimiento: new Date(), foto:'https://t1.ea.ltmcdn.com/es/posts/5/2/6/el_pato_como_mascota_20625_600_square.jpg'}
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      // alert(params.id);
    })
  }
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor)
  }

}
