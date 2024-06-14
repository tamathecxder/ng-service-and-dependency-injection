import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../shared/models/account.model';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../shared/services/logging.service';

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
  @Output() statusChanged = new EventEmitter<Account>();

  constructor(
    // first approach: using constructor
    private loggingService: LoggingService
  ) {}

  handleStatusChange(status: string) {
    this.statusChanged.emit(new Account(this.account!.id, this.account!.name, status));

    this.loggingService.logAccountStatusChange(status);
  }
}
