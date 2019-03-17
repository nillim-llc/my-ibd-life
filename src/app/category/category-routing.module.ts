import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryComponent } from './components/category.component';

const categoryRoutes: Routes = [
    {
        path: 'categories', component: CategoryComponent, children: [
            { path: ':id', component: CategoryDetailComponent },
        ]
    },


];

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule {}
