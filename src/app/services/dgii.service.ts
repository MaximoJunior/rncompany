import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DgiiService {

  url:string = environment.API + '/dgii/';

  constructor( private http:HttpClient) {

  }

  getCompanyDetailsByRNC(RNC: any):Observable<any> {
       return this.http.get<any>( `${this.url}${RNC}`, { responseType: 'json' } ).pipe( retry(2) )
  }


}
