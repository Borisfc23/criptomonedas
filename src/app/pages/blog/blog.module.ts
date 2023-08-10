import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HeroComponent } from './hero/hero.component';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [BlogComponent, HeroComponent, GridComponent, DetailComponent],
  imports: [CommonModule, BlogRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BlogModule {}
