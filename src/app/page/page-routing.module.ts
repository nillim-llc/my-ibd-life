import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageComponent } from './components/page.component';

const pageRoutes: Routes = [
    {
        path: 'ibd-relationships', component: PageComponent, children: [
            { path: ':id', component: PageDetailComponent },
        ]
    },
    {
        path: 'ibd-insurance', component: PageComponent, children: [
            { path: ':id', component: PageDetailComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(pageRoutes),
        CategoryRoutingModule,
    ],
    exports: [
        RouterModule
    ]
})
export class PageRoutingModule {}
