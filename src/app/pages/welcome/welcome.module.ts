import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { IconsProviderModule } from '../../icons-provider.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { WelcomeComponent } from './welcome.component';
import { ExamplesComponent } from 'src/app/components/examples/examples.component';
import { InstagramComponent } from 'src/app/components/examples/instagram/instagram.component';
import { PricesComponent } from 'src/app/components/prices/prices.component';
import { FeaturesComponent } from 'src/app/components/features/features.component';


@NgModule({
  imports: [
    NzIconModule,
    IconsProviderModule,
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzTabsModule,
    NzTagModule,
    NzBadgeModule,
    WelcomeRoutingModule,
    NzButtonModule
  ],
  declarations: [
    WelcomeComponent,
    ExamplesComponent,
    InstagramComponent,
    PricesComponent,
    FeaturesComponent
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
