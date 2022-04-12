import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control:FormControl = new FormControl();


  actores=[{nombre: 'ellen pompeo' , personaje: '' ,foto: 'https://vader.news/__export/1603919434859/sites/gadgets/img/2020/10/28/greys_anatomy_ellen-pompeo.jpeg_1160213291.jpeg'},
  {nombre: 'zendaya' , personaje: '' ,foto: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/9/4/d/a94dc7c6ffe9a11acb8462396ee79543.jpg'},
  {nombre: 'park seo joon' , personaje: '' , foto: 'https://es.web.img2.acsta.net/c_310_420/pictures/21/08/28/03/55/3396965.jpg'}]

  actoresOriginal = this.actores;
  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1 )
    })
  }

  optionSelected(event : MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);   
    this.control.patchValue('');
    console.log(this.table);
    if(this.table !== undefined){
      this.table.renderRows();     
    } 

  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }
  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();

  }

}
