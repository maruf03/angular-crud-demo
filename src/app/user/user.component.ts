import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent {
  constructor(private userService: UserService, private messageService: MessageService) { }
}
