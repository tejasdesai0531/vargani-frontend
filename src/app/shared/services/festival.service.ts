import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { AuthEndPoints, ApiMethod } from '../../core/services/consts';
import { Observable } from 'rxjs';
import { FestivalModel } from '../models/FestivalModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  constructor(private _http: HttpService) { }

  getAllFestivals(): Observable<FestivalModel> {

    return this._http.requestCall<FestivalModel>(AuthEndPoints.GET_ALL_FESTIVALS, ApiMethod.GET).pipe(
      map(value => Object.assign(new FestivalModel(), value))
    )
    
  }
}
