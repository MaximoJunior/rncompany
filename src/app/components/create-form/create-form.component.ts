import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { DgiiService } from 'src/app/services/dgii.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Input() formGroup:FormGroup;
  @Output() submitFormEvent = new EventEmitter<Object>();

  invalidFields:any= { };
  initialFormValues:Object;

  constructor() { }

  ngOnInit(): void {
     
    this.setIdentifyInvalidFields();
    
  }

  onSubmit() {

    console.log("Submit")

    if( this.formGroup.invalid ) {
      window.alert("Ingresar todos los campos señalados");
      this.identifyInvalidFields();
      return;
    }

    this.submitFormEvent.emit( this.formGroup.value );
 
  }


  resetFormFields():void{

    this.formGroup.reset();
    this.setIdentifyInvalidFields();

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
