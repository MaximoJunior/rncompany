import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { DgiiService } from 'src/app/services/dgii.service';

@Component({
  selector: 'app-create-company-screen',
  templateUrl: './create-company-screen.component.html',
  styleUrls: ['./create-company-screen.component.css']
})
export class CreateCompanyScreenComponent implements OnInit {

  companyForm:FormGroup;
  currentRNC:string = "";


  constructor(private formBuilder:FormBuilder, 
              private companyService:CompanyService, 
              private dgiiService:DgiiService ) {}

  ngOnInit(): void {

      this.companyForm = this.formBuilder.group({
        rnc: ['', Validators.required ],
        name: ['', Validators.required ],
        commercialName: [ '', Validators.required ],
        economicActivity: [ '', Validators.required ],
        governmentBranch: [ '', Validators.required ],
        paymentScheme: [ '', Validators.required ],
        status: [ '', Validators.required ],
        category: ['']
      });

  }

  getRNCDetails():void {

      if( !this.currentRNC.length ){
        window.alert("Ingrese el numero RNC");
        return;
      }

      this.dgiiService.getCompanyDetailsByRNC( this.currentRNC ).subscribe( response => {
          
          if( response.message === "OK" ){
              this.loadCompanyForm( response.company );
          }else{
            window.alert( "El numero RNC no fue encontrado." );
          }

          // Clean field Buscar
          this.currentRNC = "";

      });

  }

  loadCompanyForm( companyValues:any ):void {
    this.companyForm.patchValue( companyValues );
  }

  submitFormCompany( company ){

      
        this.companyService.saveCompany( company ).subscribe( response => {
    
           console.log( response );
           if( response.message === "OK"){
    
              window.alert(`Empresa : ${ response.company.name }, creada correctamente.`);
              this.companyForm.reset();
    
           }else {
              // console.log( response.message )
              window.alert( response.message );
              this.companyForm.reset();
           }
    
        });

}

}
