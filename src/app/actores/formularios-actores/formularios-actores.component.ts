import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formularios-actores',
  templateUrl: './formularios-actores.component.html',
  styleUrls: ['./formularios-actores.component.css']
})
export class FormulariosActoresComponent implements OnInit {

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  form: FormGroup;
  @Input()
  modelo: actorDTO;

  @Input()
  errores: string [] = [];

  @Output()
  Onsubmit: EventEmitter<actorCreacionDTO>= new EventEmitter<actorCreacionDTO>();

  imagenCambiada=false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required]}],
      fechaNacimiento:'',
      foto:'',
      biografia:''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  
  archivoSeleccionado(file){
    this.imagenCambiada = true;
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);
  }

  onSubmit(){
    if (!this.imagenCambiada){
      this.form.patchValue({'foto': null});
    }
    this.Onsubmit.emit(this.form.value);
  }
}
