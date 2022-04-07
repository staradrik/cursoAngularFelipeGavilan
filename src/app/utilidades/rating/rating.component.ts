import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

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
    this.RatingSeleccionado = index +1;
    this.votado = true;
    this.ratingAnterior = this.RatingSeleccionado;
    this.rated.emit(this.RatingSeleccionado);
  }

}
