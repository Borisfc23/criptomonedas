import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { posts } from 'src/assets/json/json';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  posts: any[] = posts;
  constructor(private readonly router: Router) {}
  viewDetail(id: number) {
    this.router.navigate([`blog/details/${id}`]);
  }
}
