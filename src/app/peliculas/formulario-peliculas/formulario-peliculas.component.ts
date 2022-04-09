import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''
    })

    if(this.modelo !==undefined){
        this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }
  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

}
