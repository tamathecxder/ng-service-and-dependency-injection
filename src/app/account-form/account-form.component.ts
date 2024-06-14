import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Account } from '../shared/models/account.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../shared/services/logging.service';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss',
  providers: [LoggingService, AccountsService],
})
export class AccountFormComponent {
  name: string = '';
  status: string = '';
  private loggingService?: LoggingService;
  private accountService?: AccountsService;

  constructor() {
    // second approach: using inject method
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountsService);
  }

  onAddAccount() {
    this.accountService?.add(this.name, this.status);
    this.loggingService?.logAccountAdded();
  }
}
