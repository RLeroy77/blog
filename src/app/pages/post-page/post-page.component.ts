import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostService} from '../../core/services/post.service';
import {Post} from '../../core/models/post';
import {LightUser} from '../../core/models/user';
import { CommentModel } from '../../core/models/comment';
import {UserService} from '../../core/services/user.service';
import {CommentService} from '../../core/services/comment.service';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent  implements OnInit{

  id: number = 0;
  post: Post = {body: '', id: 0, title: '', userId: 0};
  user: LightUser = { id: 0, name: '', username: '', email: '' };
  comments: Array<CommentModel> = [];

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.postService.getPostById(this.id).subscribe(
      (post: Post) => {
        this.post = post;

        this.userService.getUsersById(post.userId).subscribe(
          (user: LightUser) => this.user = user  // Ici on attend un LightUser
        );
      }
    );

    this.commentService.getCommentsByIdPost(this.id).subscribe(
      (comments: Array<CommentModel>) => this.comments = comments
    );
  }

}
