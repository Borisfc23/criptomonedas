import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { posts } from 'src/assets/json/json';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  id: number = 1;
  post: Post = {
    id: 1,
    date: '',
    title: '',
    desc: '',
    img: '',
    subtitle: [],
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe((val) => {
      this.post = posts.find(({ id }) => id == val['id']) || this.post;
    });
  }
  backBlog() {
    this.router.navigate(['/blog']);
  }
  scrollToElement(element: any): void {
    const titleElement = document.getElementById(
      'title' + (element + 1)
    ) as HTMLElement;
    const offset = 70; // Ajusta este valor según tus necesidades

    const elementPosition =
      titleElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
