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

  @Output()
  submit: EventEmitter<actorCreacionDTO>= new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required]}],
      fechaNacimiento:'',
      foto:''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  onSubmit(){
    this.submit.emit(this.form.value);
  }
  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

}
