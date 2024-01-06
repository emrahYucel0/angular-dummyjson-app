import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/type';
import { Post, Todo } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ResponseType<Post[]>> {
    return this.http.get<ResponseType<Post[]>>(`https://dummyjson.com/posts`)
  }}

