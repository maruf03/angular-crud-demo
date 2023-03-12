import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.addAll([
      { key: "msg", severity: 'info', summary: 'Message 1', detail: 'Message Content' },
      { key: "msg", severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { key: "msg", severity: 'info', summary: 'Message 3', detail: 'Message Content' }
    ]);
  }


}
