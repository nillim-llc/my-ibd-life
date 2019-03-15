import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageItemComponent } from './components/page-item/page-item.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageComponent } from './components/page.component';

import { PageRoutingModule } from './page-routing.module';
import { TextSectionService } from './services/text-section.service';

@NgModule({
    declarations: [
        PageComponent,
        PageDetailComponent,
        PageItemComponent,
        PageListComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        CoreModule,
    ],
    providers: [
        TextSectionService
    ]
})
export class PageModule {}
