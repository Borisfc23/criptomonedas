import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { HeroComponent } from './hero/hero.component';
import { BuyComponent } from './buy.component';
import { ServicesComponent } from './services/services.component';
import { TopComponent } from './top/top.component';
import { FaqComponent } from './faq/faq.component';
import { GetcoinComponent } from './getcoin/getcoin.component';

@NgModule({
  declarations: [BuyComponent, HeroComponent, ServicesComponent, TopComponent, FaqComponent, GetcoinComponent],
  imports: [CommonModule, BuyRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BuyModule {}
