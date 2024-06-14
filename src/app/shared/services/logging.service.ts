import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logAccountStatusChange(status: string) {
    console.log('Account status changed, new status: ' + status);
  }

  logAccountAdded() {
    console.log('Your new account has been added');
  }
}
