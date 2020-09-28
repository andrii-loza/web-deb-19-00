import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketService} from '../../services/market.service';

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})
export class MarketItemComponent implements OnInit {

  count = 0;
  @Input('product') product: any;
  // @Output('boughtProduct') boughtProduct = new EventEmitter();

  constructor(public marketService: MarketService) {
  }

  ngOnInit(): void {
  }

  buyProduct(obj: any): void {
    this.marketService.$basketSubject.next(obj);
  }

}
