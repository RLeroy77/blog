import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PostsListComponent} from '../posts-list/posts-list.component';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    PostsListComponent,
    NavbarComponent,
    SlicePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  imageUrl: string = "images/Blog.png";

}
