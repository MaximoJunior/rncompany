import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  listCompanies:Company[];
  @Input()  companyToUpdate:Company;
  @Output() editEvent = new EventEmitter<Object>();

  constructor(private companyService:CompanyService) {

  }

  ngOnInit(): void {

    this.companyService.getCompanies().subscribe( resp => {

          this.listCompanies = resp.companies;
          this.listCompanies.reverse();

   })

  }

  ngOnChanges(changes: SimpleChanges) {

     if( changes["companyToUpdate"].previousValue !== changes["companyToUpdate"].currentValue ){
        this.updateListCompanies();

     }

  }


  deleteCompany( {id, name } ) {
  
    const answer = confirm(`¿Eliminar ${name}?`);

    if( answer ) {

      this.companyService.deleteCompany( id ).subscribe( resp => {
  
          if(resp.message === "OK") {
  
            this.listCompanies = this.listCompanies.filter( company => company.id !== id );
  
          }else {
             window.alert(`Error al eliminar ${name}`)
          }
      });

    }

  }

  // Update list companies to the recent item updated
  updateListCompanies() {
    this.listCompanies = this.listCompanies.map( company => {
      if( company.id === this.companyToUpdate.id ){
        return this.companyToUpdate;
      }
      return company;
    });
    
  }

  editCompany( company:Company ) {
    this.editEvent.emit( company );
  }



}
