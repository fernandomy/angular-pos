import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: ProductI[] = [
    {
      id: 1,
      name: 'Leche chocolatada 50gr',
      category: 'Lacteos',
      price: 2.0,
      cost: 1.5,
      stock: 10,
      stock_min: 5,
      barcode: '54654654654',
      description: '',
      state: 'En venta',
    },
  ];

  constructor(private productS: ProductService) {}
  ngOnInit(): void {
    this.productS.getProducts().subscribe((res) => {
      console.log(res);
    });
  }

  onSearch() {}
}
