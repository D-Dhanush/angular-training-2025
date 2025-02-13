import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnDestroy {
posts?:Post[];
s:Subscription;

  constructor(private postservice:PostService){

    this.s=postservice.getPost().subscribe(d=>this.posts=d)

  }
submit(post:Post){
  console.log(post);
  this.postservice.savepost(post).subscribe(p=>{console.log('after post',p);this.posts?.push(p)})
}
ngOnDestroy(): void {
  this.s.unsubscribe();
  console.log('post destroy')
}


}
