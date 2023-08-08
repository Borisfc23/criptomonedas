import { Component } from '@angular/core';
import { topCrypto } from 'src/assets/json/json';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  topCurrency: any[] = topCrypto;
}
