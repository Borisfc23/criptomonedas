import { Component } from '@angular/core';
import { Crypto } from 'src/app/models/Crypto';
import { FiltersService } from 'src/app/services/filters.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  cryptos: any[] = [];
  filterInput = '';
  tempArray: any[] = [];
  constructor(private readonly service: FiltersService) {
    this.tempArray = [...this.cryptos];
  }
  ngOnInit(): void {
    this.filterAll();
  }
  filterAll() {
    this.cryptos = this.service.filterAll();
  }
  filterFav(event: any) {
    event.target.classList.add('active');
    this.removeActive();
    this.cryptos = this.service.filterFav();
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
  filterSearch(event: any) {
    this.cryptos = this.service.filterSearch(event);
  }
  startChange(event: any, cryto: Crypto) {
    this.service.startChange(event);
    this.service.addToFavorites(cryto);
  }
  removeActive() {
    document
      .querySelectorAll('.tab-btn')
      .forEach((item) => item.classList.remove('active'));
  }
}
