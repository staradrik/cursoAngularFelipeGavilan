import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control:FormControl = new FormControl();

  actores=[{nombre: 'ellen pompeo' , foto: 'https://vader.news/__export/1603919434859/sites/gadgets/img/2020/10/28/greys_anatomy_ellen-pompeo.jpeg_1160213291.jpeg'},
  {nombre: 'zendaya' , foto: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/9/4/d/a94dc7c6ffe9a11acb8462396ee79543.jpg'},
  {nombre: 'park seo joon' , foto: 'https://es.web.img2.acsta.net/c_310_420/pictures/21/08/28/03/55/3396965.jpg'}]

  actoresOriginal = this.actores;
  actoresSeleccionados = [];

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !==-1 )
    })
  }

  optionSelected(event : MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

  }

}
