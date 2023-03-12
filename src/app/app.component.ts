import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'crud-application';
  menuItems: MenuItem[] = [
    { label: "Users", routerLink: "/users" },
    { label: "Products", routerLink: "/products" }
  ];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.messageService.add({key: "msg", severity:'success', summary: 'Summary Text 1', detail: 'Detail Text'})
    this.messageService.add({key: "msg", severity:'success', summary: 'Summary Text 2', detail: 'Detail Text'})
    this.messageService.add({key: "msg", severity:'success', summary: 'Summary Text 3', detail: 'Detail Text'})
  }
}