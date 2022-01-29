import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-manage-company-screen',
  templateUrl: './manage-company-screen.component.html',
  styleUrls: ['./manage-company-screen.component.css']
})
export class ManageCompanyScreenComponent implements OnInit {

  formCompany:FormGroup;
  isFormOpen:boolean = false;
  companyUpdated:Company;

  constructor( private companyService:CompanyService, private formBuilder:FormBuilder) { }



  ngOnInit(): void {

    this.formCompany = this.formBuilder.group({
      id: ['', Validators.required], 
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

  submitFormCompany( values ){
        
        this.companyService.updateCompany( values ).subscribe( resp => {

            if( resp.message === "OK" ) {

                window.alert("Empresa actualizada");
                this.setCompanyUpdated( resp.company );
                this.closeForm();

            }else{
                window.alert("Error a actualizar los datos")
                console.log( resp.message );
                this.closeForm();

            }

        })

       
  }

  openForm(){
    this.isFormOpen = true;
  } 

  closeForm() {
    this.isFormOpen = false;
  }

  editCompany( company:Company ) {
     this.formCompany.patchValue( company );
     this.openForm();
  }

  setCompanyUpdated( company ) {
    this.companyUpdated = company;
  }

}
