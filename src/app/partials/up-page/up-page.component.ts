import { Component } from '@angular/core';

@Component({
  selector: 'app-up-page',
  templateUrl: './up-page.component.html',
  styleUrls: ['./up-page.component.css'],
})
export class UpPageComponent {
  topPage() {
    window.scrollTo(0, 0);
  }
}
