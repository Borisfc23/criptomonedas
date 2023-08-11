import { Injectable } from '@angular/core';
import { cryptos } from 'src/assets/json/json';
import { BehaviorSubject, Observable } from 'rxjs';
import { Crypto } from '../models/Crypto';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  favorites: Crypto[] = [];
  cryptos: any[] = cryptos;
  filterInput = '';
  tempArray: any[] = [];
  private favoritesSubject = new BehaviorSubject<Crypto[]>([]);
  get favoritesAction$(): Observable<Crypto[]> {
    return this.favoritesSubject.asObservable();
  }
  constructor() {
    if (localStorage.getItem('cryptos')) {
      this.tempArray = JSON.parse(localStorage.getItem('cryptos') || '[]');
    } else {
      this.tempArray = [...this.cryptos];
    }
  }

  filterEnergy(): Crypto[] {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(({ type }) => type === 'energy');
    this.cryptos = crypsMeta;
    return this.cryptos;
  }
  filterEntertainment(): Crypto[] {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(
      ({ type }) => type === 'entertainment'
    );
    this.cryptos = crypsMeta;
    return this.cryptos;
  }
  filterMeta(): Crypto[] {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(({ type }) => type === 'metaverse');
    this.cryptos = crypsMeta;
    return this.cryptos;
  }
  filterDefi(): Crypto[] {
    this.cryptos = this.tempArray;
    const crypsMeta = this.cryptos.filter(({ type }) => type === 'defi');
    this.cryptos = crypsMeta;
    return this.cryptos;
  }
  filterSearch(event: any): Crypto[] {
    this.cryptos = this.tempArray;
    const crypsSearch = this.cryptos.filter(({ name }) =>
      name.toLowerCase().includes(event)
    );
    this.cryptos = crypsSearch;
    return this.cryptos;
  }
  filterAll(): Crypto[] {
    this.cryptos = this.tempArray;
    return this.cryptos;
  }
  filterFav(): Crypto[] {
    this.cryptos = this.tempArray;
    const crypFavs = this.cryptos.filter(({ fav }) => fav == true);
    this.cryptos = crypFavs;
    return this.cryptos;
  }
  addToFavorites(cryp: Crypto): Crypto[] {
    const isFavorite = this.favorites.find(({ id }) => id === cryp.id);
    if (isFavorite) {
      isFavorite.fav = false;
    } else {
      this.favorites.push({ ...cryp, fav: true });
    }
    this.favoritesSubject.next(this.favorites);
    this.favorites.forEach((obj2) => {
      const index = this.tempArray.findIndex((obj1) => obj1.id === obj2.id);
      if (index !== -1) {
        this.tempArray[index] = obj2;
      }
    });
    localStorage.setItem('cryptos', JSON.stringify(this.tempArray));
    return this.tempArray;
  }
  startChange(event: any) {
    event.target.classList.toggle('active');
  }
}
