import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './components/card.component';
import { CardService } from './services/card.service';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        CardRoutingModule
    ],
    providers: [
        CardService
    ]
})
export class CardModule {}
