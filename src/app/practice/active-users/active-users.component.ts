import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss'
})
export class ActiveUsersComponent {
  @Input() user: User | null = null;

  constructor(private usersService: UsersService) { }

  handleInactive() {
    this.usersService.switch(this.user!.id, 'inactive');
  }
}
