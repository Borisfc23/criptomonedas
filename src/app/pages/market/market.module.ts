import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { MarketComponent } from './market.component';
import { TopComponent } from './top/top.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarketComponent, OverviewComponent, TopComponent],
  imports: [CommonModule, MarketRoutingModule, FormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MarketModule {}
