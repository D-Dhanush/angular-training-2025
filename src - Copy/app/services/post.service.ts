import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
    getPost():Observable<Post[]>{
      return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }


    getPostByID(id: any):Observable<Post>{
      return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  savepost(post: Post):Observable<Post>{
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',post);
}
  
}
