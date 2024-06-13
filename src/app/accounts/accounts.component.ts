import { Component, Input } from '@angular/core';
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

  handleActive() {
    this.account!.status = 'active';
  }

  handleInactive() {
    this.account!.status = 'inactive';
  }

  handleUnknown() {
    this.account!.status = 'unknown';
  }
}
