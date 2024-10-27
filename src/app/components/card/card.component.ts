import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { iProducts } from '../../../models/product.model';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { BgColorDirective } from '../../../directives/bg-color.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor , CurrencyPipe, BgColorDirective , CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {

  products: iProducts[] = [] as iProducts[];

  constructor(private _ApiService: ApiServiceService) { }
  ngOnInit(): void {

    this._ApiService.getAllProducts().subscribe((data) => {
      this.products = data;
      // console.log('22' , this.products);
    }
    )
    
  }
}
