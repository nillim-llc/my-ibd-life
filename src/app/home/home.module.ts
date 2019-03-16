import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {}
