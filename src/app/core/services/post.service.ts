import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  ApiUrl : string = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getAllPosts() : Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.ApiUrl + '/posts');
  }

  getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(this.ApiUrl + '/posts/' + id);
  }

  getPostByUserId(id: number): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.ApiUrl + '/users/' + id + '/posts');
  }

  createPost (post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.ApiUrl + '/posts', post);
  }
}
