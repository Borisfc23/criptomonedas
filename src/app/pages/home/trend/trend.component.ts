import { Component } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { cryptos } from 'src/assets/json/json';
@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css'],
})
export class TrendComponent {
  cryptos: any[] = cryptos;
  tempArray: any[] = [];
  constructor(private readonly service: FiltersService) {
    this.tempArray = [...this.cryptos];
  }
  filterAll() {
    this.cryptos = this.service.filterAll();
  }
  filterDefi() {
    this.cryptos = this.service.filterDefi();
  }
  filterEnergy() {
    this.cryptos = this.service.filterEnergy();
  }
  filterEntertainment() {
    this.cryptos = this.service.filterEntertainment();
  }
  filterMeta() {
    this.cryptos = this.service.filterMeta();
  }
  filterSearch(event: any) {
    this.cryptos = this.service.filterSearch(event);
  }
  startChange(event: any) {
    this.service.startChange(event);
  }
}
