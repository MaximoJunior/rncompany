import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {


  @Input() formGroup:FormGroup;
  @Output() submitFormEvent = new EventEmitter<Object>();
  @Output() closeFormEvent = new EventEmitter();
  invalidFields:any= { };
  initialFormValues:Object;

  constructor() { }

  ngOnInit(): void {

    this.setIdentifyInvalidFields();
    this.initialFormValues = this.formGroup.value;

  }

  onSubmit() {

    if( this.formGroup.invalid ) {
      window.alert("Ingresar todos los campos señalados");
      this.identifyInvalidFields();
      return;
    }

    this.submitFormEvent.emit( this.formGroup.value );

  }

  // Reset to initialValues
  onReset() {
      this.formGroup.patchValue( this.initialFormValues );
  }

  closeForm() {
    this.closeFormEvent.emit();
  }

  identifyInvalidFields(){
     
    for( let prop in this.formGroup.value ){
      this.invalidFields[prop] = this.formGroup.value[prop] ? true : false;

    }

}

setIdentifyInvalidFields(){

  for( let prop in this.formGroup.value ){
    this.invalidFields[prop] = true;

  }

}

}
