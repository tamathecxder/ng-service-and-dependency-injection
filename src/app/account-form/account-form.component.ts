import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../shared/models/account.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent {
  @Output() accountAdded = new EventEmitter<Account>();
  name: string = '';
  status: string = '';

  onAddAccount() {
    if (!this.name || !this.status) {
      alert('Please enter name and status');

      return;
    }

    const id = Math.floor(Math.random() * 1000);
    this.accountAdded.emit(new Account(id, this.name, this.status));
  }
}
