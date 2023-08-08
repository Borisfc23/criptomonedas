import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.scrollActive();
  }
  navToggler() {
    const navbar = document.querySelector('[data-navbar]');
    const navToggler = document.querySelector('[data-nav-toggler]');

    navbar?.classList.toggle('active');
    navToggler?.classList.toggle('active');
    document.body?.classList.toggle('active');
  }
  closeMenu() {
    const navbarLinks = document.querySelectorAll('[data-nav-link]');
    const navbar = document.querySelector('[data-navbar]');
    const navToggler = document.querySelector('[data-nav-toggler]');

    navbar?.classList.remove('active');
    navToggler?.classList.remove('active');
    document.body?.classList.remove('active');
  }
  scrollActive() {
    const header = document.querySelector('[data-header]');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        header?.classList.add('active');
      } else {
        header?.classList.remove('active');
      }
    });
  }
}
