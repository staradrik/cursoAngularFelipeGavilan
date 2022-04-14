import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';
import { actorPeliculaDTO } from '../../actores/actor';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errores: string []=[];
  
  @Input()
  modelo: peliculaDTO;
  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[];

  @Input()
  generosSeleccionados: MultipleSelectorModel[] = [];
  
  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[];

  @Input()
  cinesSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];


  imagenCambiada = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosIds:'',
      cinesIds:'', 
      actores: ''
    })

    if(this.modelo !==undefined){
        this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    const generosId = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosIds').setValue(generosId);

    const cinesId = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesIds').setValue(cinesId);

    const actores = this.actoresSeleccionados.map(val => {
      return {id: val.id, personaje: val.personaje}
    });
    this.form.get('actores').setValue(actores);

    if(!this.imagenCambiada){
      this.form.patchValue({'poster': null});
    }


    this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }
  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

}
