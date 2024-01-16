import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SemanticService {

  private apiUrl = 'http://localhost:8089/semantic/processInput';
  private apiUrl1='http://localhost:8089'
  constructor(private http: HttpClient) {}

  processInput(input: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { input });
  }
  confirmResource(data: any): Observable<any> {
    console.log("dataaa eli bch tetbaath",data)
    const confirmationUrl = `${this.apiUrl1}/confirmResource`;
    return this.http.post<any>(confirmationUrl, data);
  }
}
