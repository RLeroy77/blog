import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {Post} from '../../core/models/post';
import {PostService} from '../../core/services/post.service';
import {RouterLink} from '@angular/router';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    SlicePipe
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {

  posts: Array<Post> = [];

  constructor(private  postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts,
    )
  }
}
