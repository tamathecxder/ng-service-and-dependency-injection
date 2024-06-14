import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.scss'
})
export class InactiveUsersComponent {
  @Input() user: User | null = null;

  constructor(private usersService: UsersService) { }

  handleActive() {
    this.usersService.switch(this.user!.id, 'active');
  }
}
