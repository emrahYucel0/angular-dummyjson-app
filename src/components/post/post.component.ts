import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  posts:Post[] = []

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.postService.getAll().subscribe(res=>{
      this.posts=res["posts"]
    })
  }
  
}
