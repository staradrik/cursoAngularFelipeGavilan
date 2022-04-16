import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  RatingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr =[];
  votado : Boolean = false;
  ratingAnterior;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index:number):void{
    this.RatingSeleccionado = index +1;
  }

  manejarMouseLeave(){
    if (this.RatingSeleccionado !==0){
      this.RatingSeleccionado = this.ratingAnterior; 
    }else{
        this.RatingSeleccionado = 0;
    }
 
  }
  rate(index:number):void{
    if(this.seguridadService.estaLogueado()){
      this.RatingSeleccionado = index +1;
      this.votado = true;
      this.ratingAnterior = this.RatingSeleccionado;
      this.rated.emit(this.RatingSeleccionado);
    }else{
      Swal.fire('Debe loguears', "No puede realizar esta accion", "error");
    }
    
  }

}
