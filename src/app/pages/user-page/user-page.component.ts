import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {PostService} from '../../core/services/post.service';
import {Post} from '../../core/models/post';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit {

  id:number = 0;
  posts: Array<Post> = [];
  user: User = {
    address: {city: '', geo: {lat: '', lng: ''}, street: '', suite: '', zipcode: ''},
    company: {bs: '', catchPhrase: '', name: ''},
    email: '',
    id: 0,
    phone: '',
    username: '',
    website: '',
    name: ''}

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.userService.getUsersById(this.id).subscribe((user: User) => {
        this.user = user;

        this.postService.getPostByUserId(this.user.id).subscribe(
          (posts: Array<Post>) => this.posts = posts
        );
      });
    });
  }
}
