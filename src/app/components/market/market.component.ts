import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  products: any[] = [
    {
      name: 'IPhone 7',
      price: 400
    },
    {
      name: 'IPhone 8',
      price: 450
    },
    {
      name: 'IPhone 10',
      price: 500
    },
    {
      name: 'Apple Watch 3',
      price: 350
    },
    {
      name: 'Samsung Galaxy',
      price: 420
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
