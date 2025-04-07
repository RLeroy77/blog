import {Component, OnInit} from '@angular/core';
import {User} from '../../core/models/user';
import {UserService} from '../../core/services/user.service';
import {NavbarComponent} from '../../layouts/navbar/navbar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  users: Array<User> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users: Array<User>) => this.users = users,
    )
  }

}
