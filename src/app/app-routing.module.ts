import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './category/category.module';


const routes: Routes = [
    // { path: '', loadChildren: './category/category.module#CategoryModule' },
    { path: '', loadChildren: './page/page.module#PageModule' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        CategoryModule,
    ]
})
export class AppRoutingModule {}
