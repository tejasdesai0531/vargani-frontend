import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment';
import { ApiMethod, AuthEndPoints } from '../consts';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  methods: ApiMethod

  constructor(
    private http: HttpClient,
    private _error: ErrorService
  ) { }


  requestCall(api: AuthEndPoints, method: ApiMethod, data?: any) {
    let response;
    switch(method) {
      case ApiMethod.GET:
        response = this.http.get(`${environment.apiUrl}${api}`)
            .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.POST:
        response = this.http.post(`${environment.apiUrl}${api}`, data)
            .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.PUT:
      response = this.http.put(`${environment.apiUrl}${api}`, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.DELETE:
      response = this.http.delete(`${environment.apiUrl}${api}`)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      default:
        break;
    }
  }

  handleError(error: HttpErrorResponse, self) {
    if(error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      this._error.whichError(error.status, error.message);
      return throwError({error: error.message, status: error.status})
    }
  }
}
