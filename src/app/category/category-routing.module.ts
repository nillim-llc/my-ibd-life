import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryComponent } from './components/category.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const categoryRoutes: Routes = [
    { path: 'contact-us', component: ContactUsComponent },
    {
        path: ':id', component: CategoryComponent, children: [
            { path: '', component: CategoryDetailComponent },
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
