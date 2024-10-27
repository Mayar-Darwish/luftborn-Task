import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { iProducts } from '../../../models/product.model';
import { CurrencyPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor , CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {

  products: iProducts[] = [] as iProducts[];

  constructor(private _ApiService: ApiServiceService) { }
  ngOnInit(): void {

    this._ApiService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log('22' , this.products);
    }
    )
    
  }
}
