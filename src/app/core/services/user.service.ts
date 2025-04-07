import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUrl : string = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getUsersById(id: number) : Observable<User> {
    return this.http.get<User>(this.ApiUrl + '/users/' + id);
  }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.ApiUrl + '/users');
  }
}
