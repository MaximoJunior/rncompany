import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url:string = 'https://rncompan.herokuapp.com/api/company/';
  config:HttpHeaders;
  

  constructor( private http:HttpClient ) {
      this.config = new HttpHeaders();
      this.config.set('Content-Type', 'application/json; charset=utf-8');
   }

  getCompanies():Observable<any> {
    return this.http.get<any>(this.url, { responseType: 'json' }).pipe( retry(2) )
  }

  saveCompany(data:any): Observable<any> {
   
    return this.http.post( this.url, data, { headers: this.config } ).pipe( retry(2) )
  }

  updateCompany(company:Company):Observable<any>{
      return this.http.put( `${this.url}${company.id}`, company, { headers: this.config } ).pipe( retry(2) )
  }

  deleteCompany(id):Observable<any>{
    return this.http.delete( `${this.url}${id}`,  { headers: this.config } ).pipe( retry(2) )
  }

  
}
