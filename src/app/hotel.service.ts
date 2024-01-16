import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hotel } from './model/Hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8089/hotels/add';

  async saveHotel(hotel: Hotel){
    const response = await this.http.post<Hotel>(this.apiUrl,hotel).toPromise();
    return response;
  }

  findById(id: string):Observable<Hotel>{
    return  this.http.get<Hotel>(`http://localhost:8089/hotels/hotel/${id}`);
  }
}


