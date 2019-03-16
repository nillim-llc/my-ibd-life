import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { PageModule } from './page/page.module';


const routes: Routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        CategoryModule,
        PageModule,
        HomeModule
    ]
})
export class AppRoutingModule {}
