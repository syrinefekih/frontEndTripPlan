import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './model/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:8089/flights/add';
  constructor(private http: HttpClient) {}

  
  async saveFlight(flight: Flight){
    const response = await this.http.post<Flight>(this.apiUrl,flight).toPromise();
    return response;
  }
findById(id: string):Observable<Flight>{
  return  this.http.get<Flight>(`http://localhost:8089/flights/flight/${id}`);
}
}
