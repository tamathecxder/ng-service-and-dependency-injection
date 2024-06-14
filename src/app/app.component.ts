import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { Account } from './shared/models/account.model';
import { CommonModule } from '@angular/common';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsService } from './shared/services/accounts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AccountsComponent, AccountFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AccountsService]
})
export class AppComponent {
  title = 'ng-service-and-dependency-injection';

  accounts: Account[] = [];

  constructor(private accountService: AccountsService) {
    this.accounts = this.accountService.accounts;
  }
}
