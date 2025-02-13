import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postdetails',
  standalone: false,
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css'
})
export class PostdetailsComponent implements OnDestroy, OnInit {
  postsId:string|null='';
  posts: any;
  s!: Subscription;

constructor(private route:ActivatedRoute,private post:PostService){
  this.postsId=this.route.snapshot.paramMap.get('id');
  if(this.postsId){
    this.s=post.getPostByID(this.postsId).subscribe((data)=>{this.posts=data})
  }
}
  ngOnInit(): void {
    console.log('inint');
  }
  ngOnDestroy(): void {
    console.log('destroy');
    this.s.unsubscribe();
  }
}
