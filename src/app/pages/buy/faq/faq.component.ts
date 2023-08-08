import { Component } from '@angular/core';
import { faqs } from 'src/assets/json/json';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  faqs: any[] = faqs;
  viewContent(index: any) {
    this.faqs[index].active = !this.faqs[index].active;
    for (let i = 0; i < this.faqs.length; i++) {
      if (i !== index) {
        this.faqs[i].active = false;
      }
    }
  }
}
