import { Component } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
})
export class MarketComponent {
  startChange(event: any) {
    event.target.classList.toggle('active');
  }
}
