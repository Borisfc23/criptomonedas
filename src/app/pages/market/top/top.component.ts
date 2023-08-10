import { Component } from '@angular/core';
import { cryptos } from 'src/assets/json/json';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  cryptos: any[] = cryptos;
  filterInput = '';
  tempArray: any[] = [];
  constructor() {
    this.tempArray = [...this.cryptos];
  }
  filterAll() {
    this.cryptos = this.tempArray;
  }
  filterFav() {}
  filterEnergy() {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(({ type }) => type === 'energy');
    this.cryptos = crypsMeta;
  }
  filterEntertainment() {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(
      ({ type }) => type === 'entertainment'
    );
    this.cryptos = crypsMeta;
  }
  filterMeta() {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(({ type }) => type === 'metaverse');
    this.cryptos = crypsMeta;
  }
  filterSearch(event: any) {
    this.cryptos = this.tempArray;
    const crypsSearch = this.cryptos.filter(({ name }) =>
      name.toLowerCase().includes(event)
    );
    this.cryptos = crypsSearch;
  }
  startChange(event: any) {
    event.target.classList.toggle('active');
  }
}
