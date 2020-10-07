import {Component, OnInit} from '@angular/core';
import {IBasketItem} from '../basket/basket.component';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  products: IBasketItem[] = [
    {
      name: 'IPhone 7',
      price: 400,
      date: new Date(),
    },
    {
      name: 'IPhone 8',
      price: 450,
      date: new Date(),
    },
    {
      name: 'IPhone 10',
      price: 500,
      date: new Date(),
      onSale: true
    },
    {
      name: 'Apple Watch 3',
      price: 350,
      date: new Date(),
      onSale: true
    },
    {
      name: 'Samsung Galaxy',
      price: 420,
      date: new Date(),
    }
  ];

  sum = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveNewPrice(price: number): void {
    this.sum += price;
  }

}
