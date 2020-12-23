import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http: HttpService) { }

}
