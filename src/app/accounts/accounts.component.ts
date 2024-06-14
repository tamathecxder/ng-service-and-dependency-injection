import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../shared/models/account.model';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../shared/services/logging.service';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
  providers: [LoggingService],
})

export class AccountsComponent {
  @Input() account?: Account;

  constructor(
    // first approach: using constructor
    private accountsService: AccountsService
  ) {}

  handleStatusChange(status: string) {
    this.accountsService.setStatus(this.account!.id, status);
  }
}
