import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8089/api/users';
  private apiUrl2 = 'http://localhost:8089/api/users/add';
  private apiUrl3 = 'http://localhost:8089/api/all';



  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl2, user);
  }
  async saveUser(user: User){
    const response = await this.http.post<User>(this.apiUrl2,user).toPromise();
    return response;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl3);
  }
}
