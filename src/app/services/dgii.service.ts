import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DgiiService {

  url:string = 'https://rncompan.herokuapp.com/api/dgii/';

  constructor( private http:HttpClient) {

  }

  getCompanyDetailsByRNC(RNC: any):Observable<any> {
       return this.http.get<any>( `${this.url}${RNC}`, { responseType: 'json' } ).pipe( retry(2) )
  }


}
