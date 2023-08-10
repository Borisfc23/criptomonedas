import { Component } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
