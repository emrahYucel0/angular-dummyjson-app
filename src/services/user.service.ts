import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/type';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ResponseType<User[]>>{
    return this.httpClient.get<ResponseType<User[]>>(`https://dummyjson.com/users`)
  }
}
