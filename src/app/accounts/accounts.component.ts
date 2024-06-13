import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../shared/models/account.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})

export class AccountsComponent {
  @Input() account?: Account;
  @Output() statusChanged = new EventEmitter<Account>();

  handleStatusChange(status: string) {
    this.statusChanged.emit(new Account(this.account!.id, this.account!.name, status));
  }
}
