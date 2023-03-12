import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    
  }

  showToast(): void {
    this.messageService.addAll([
      { key: "msg", severity: 'info', summary: 'Message 1', detail: 'Message Content' },
      { key: "msg", severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { key: "msg", severity: 'info', summary: 'Message 3', detail: 'Message Content' }
    ]);
  }
}
