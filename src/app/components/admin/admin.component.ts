import {Component, OnInit} from '@angular/core';
import {BaseUrl} from '../../enums/user-roles.enum';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    
    // fetch(BaseUrl.MAIN_URL)
    // let str = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01';
    // fetch('https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01'.)
  }

}
