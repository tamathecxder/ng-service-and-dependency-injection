import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  statusChanged = new EventEmitter<string>();

  accounts: Account[] = [
    new Account(1, 'Dummy Account', 'active'),
    new Account(2, 'Another Random Account', 'inactive')
  ]

  constructor(private loggingService: LoggingService) { }

  add(name: string, status: string) {
    const fields: any = {
      name,
      status
    }

    for (const field in fields) {
      if (!fields[field]) {
        alert('Please enter ' + field);

        return;
      }
    }

    const id = Math.floor(Math.random() * 1000);
    this.accounts.push(new Account(id, name, status));
    this.loggingService?.logAccountAdded();
  }

  setStatus(id: number, status: string) {
    console.log('sdsds');


    const index = this.accounts.findIndex((account) => account.id === id);

    this.accounts[index].status = status;
    this.loggingService.logAccountStatusChange(status);
    this.statusChanged.emit(status);
  }
}
