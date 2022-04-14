import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: peliculaDTO;
  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[];

  generosSeleccionados: MultipleSelectorModel[] = [];
  
  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[];

  cinesSeleccionados: MultipleSelectorModel[] = [];




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosId:'',
      cinesId:''
    })

    if(this.modelo !==undefined){
        this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    const generosId = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosId);

    const cinesId = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesId);

    this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }
  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

}
