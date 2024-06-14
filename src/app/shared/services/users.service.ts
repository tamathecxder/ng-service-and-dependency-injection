import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Output() userSwitched = new EventEmitter<void>();

  users: User[] = [
    { id: 1, name: 'Max', status: 'active' },
    { id: 2, name: 'Anna', status: 'inactive' },
    { id: 3, name: 'John', status: 'active' },
    { id: 4, name: 'Mamat', status: 'inactive' }
  ];

  constructor() { }

  switch(id: number, status: string) {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index].status = status;

    this.userSwitched.emit();
  }

  get activeUsers() {
    return this.users.filter((user) => user.status === 'active');
  }

  get inactiveUsers() {
    return this.users.filter((user) => user.status === 'inactive');
  }
}
