import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crisis-list',
  imports: [CommonModule],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})
export class CrisisListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe(
      (data) => {
        this.users = data.users;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}