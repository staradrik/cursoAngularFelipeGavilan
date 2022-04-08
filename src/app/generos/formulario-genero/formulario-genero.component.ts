import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  form: FormGroup;
  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  guardarCambios(){
    this.submit.emit(this.form.value);
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]}]
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if (campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres';
    }
    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
