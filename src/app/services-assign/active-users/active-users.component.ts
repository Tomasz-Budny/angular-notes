import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  public users

  constructor(private usersService: UsersService) {
    this.users = usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setStatusToInactive(id);
  }
}
