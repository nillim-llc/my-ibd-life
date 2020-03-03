import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryComponent } from './components/category.component';
import { CategoryService } from './services/category.service';

@NgModule({
    declarations: [
        CategoryComponent,
        CategoryDetailComponent,
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        CoreModule,
    ],
    providers: [
        CategoryService,
    ],
    exports: [
        CategoryRoutingModule,
    ]
})
export class CategoryModule {}
