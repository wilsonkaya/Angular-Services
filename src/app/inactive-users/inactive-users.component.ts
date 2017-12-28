import { UserServices } from './../user.services';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userServices: UserServices){

  }

  onSetToActive(id: number) {
    this.userServices.changeStatus(id);
  }
}
