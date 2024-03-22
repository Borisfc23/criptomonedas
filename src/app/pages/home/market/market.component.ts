import { Component } from '@angular/core';
import { Crypto } from 'src/app/models/Crypto';
import { FiltersService } from 'src/app/services/filters.service';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
})
export class MarketComponent {
  cryptos: any[] = [];
  tempArray: any[] = [];
  selectedElement: number | null = null;
  constructor(private readonly service: FiltersService) {
    this.tempArray = [...this.cryptos];
  }
  ngOnInit(): void {
    this.filterAll();
  }
  filterAll() {
    this.cryptos = this.service.filterAll();
  }
  filterEnergy(event: any) {
    event.target.classList.add('active');
    this.removeActive();
    this.cryptos = this.service.filterEnergy();
  }
  filterEntertainment(event: any) {
    event.target.classList.add('active');
    this.removeActive();
    this.cryptos = this.service.filterEntertainment();
  }
  filterMeta(event: any) {
    event.target.classList.add('active');
    this.removeActive();
    this.cryptos = this.service.filterMeta();
  }
  filterDefi(event: any) {
    event.target.classList.add('active');
    this.removeActive();
    this.cryptos = this.service.filterDefi();
  }
  startChange(event: any, crypto: Crypto) {
    this.service.startChange(event);
    this.service.addToFavorites(crypto);
  }
  removeActive() {
    document
      .querySelectorAll('.tab-btn')
      .forEach((item) => item.classList.remove('active'));
  }
}
