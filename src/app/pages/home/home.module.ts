import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { TrendComponent } from './trend/trend.component';
import { MarketComponent } from './market/market.component';
import { InstructionComponent } from './instruction/instruction.component';
import { AboutComponent } from './about/about.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    TrendComponent,
    MarketComponent,
    InstructionComponent,
    AboutComponent,
    ApplicationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
