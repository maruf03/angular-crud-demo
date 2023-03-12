import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent {
  constructor(private productService: ProductService, private messageService: MessageService) { }
}
