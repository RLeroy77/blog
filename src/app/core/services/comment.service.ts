import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  ApiUrl : string = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getAllComments() : Observable<Array<CommentModel>> {
    return this.http.get<Array<CommentModel>>(this.ApiUrl + '/comments');
  }

  getCommentsByIdPost(id: number) : Observable<Array<CommentModel>> {
    return this.http.get<Array<CommentModel>>(this.ApiUrl + '/posts/' + id + '/comments');
  }

  createComment(comment : Partial<CommentModel>) : Observable<CommentModel> {
    return this.http.post<CommentModel>(this.ApiUrl + '/comments', comment);
  }
}
