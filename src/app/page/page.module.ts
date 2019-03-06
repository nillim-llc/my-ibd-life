import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './components/page.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageItemComponent } from './components/page-item/page-item.component';
import { PageListComponent } from './components/page-list/page-list.component';

@NgModule({
  declarations: [PageComponent, PageDetailComponent, PageItemComponent, PageListComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
