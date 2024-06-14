import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { Account } from './shared/models/account.model';
import { CommonModule } from '@angular/common';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsService } from './shared/services/accounts.service';
import { ActiveUsersComponent } from './practice/active-users/active-users.component';
import { InactiveUsersComponent } from './practice/inactive-users/inactive-users.component';
import { UsersService } from './shared/services/users.service';
import { User } from './shared/models/user.model';
import { EmptyUsersComponent } from './practice/empty-users/empty-users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    AccountsComponent,
    AccountFormComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    EmptyUsersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AccountsService, UsersService]
})
export class AppComponent {
  title = 'ng-service-and-dependency-injection';

  accounts: Account[] = [];
  activeUsers: User[] = [];
  inactiveUsers: User[] = [];

  constructor(private accountsService: AccountsService, private usersService: UsersService) {
    this.accounts = this.accountsService.accounts;
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;

    this.usersService.userSwitched.subscribe(() => {
      this.inactiveUsers = this.usersService.inactiveUsers;
      this.activeUsers = this.usersService.activeUsers;
    })

    this.accountsService.statusChanged.subscribe((status) => alert('New status: ' + status));
  }
}
