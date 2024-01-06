import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/type';
import { Post, Todo } from '../models/model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getAll():Observable<ResponseType<Todo[]>> {
    return this.http.get<ResponseType<Todo[]>>(`https://dummyjson.com/todos`)
  }}
