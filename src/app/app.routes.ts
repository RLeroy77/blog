import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PostsListComponent} from './pages/posts-list/posts-list.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {UsersListComponent} from './pages/users-list/users-list.component';
import {PostCreateComponent} from './pages/post-create/post-create.component';
import {UserLoginComponent} from './pages/user-login/user-login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'posts/create', component: PostCreateComponent},
  {path: 'post/:id', component: PostPageComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'login', component: UserLoginComponent}
];
