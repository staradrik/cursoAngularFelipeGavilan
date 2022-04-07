import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  ngOnInit(): void {
  
      this.peliculasEnCine =[{
        titulo: 'Amor',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://s03.s3c.es/imag/_v0/380x566/6/0/c/5.jpg'
      },
      {
        titulo: 'El telefono',
        fechaLanzamiento: new Date('2016-11-13'),
        precio: 2300.99,
        poster:'https://pbs.twimg.com/media/Em3gZLwWMAMRGyn.jpg:large'
      }]
        
  }

  title = 'al valor que quiera';
  ocultar = false;
  peliculasEnCine;
  peliculasProximosExtrenos = [
    
  ];
}


