import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRoutingModule } from '../contact/contact-routing.module';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

const categoryRoutes: Routes = [

    { path: ':id', component: CategoryDetailComponent },


    // {
    //     path: '/', component: CategoryComponent, children: [
    //         { path: ':id', component: CategoryDetailComponent },
    //     ]
    // },


];

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes),
        ContactRoutingModule,
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule {}
