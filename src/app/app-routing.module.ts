import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './category/category.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { PageModule } from './page/page.module';


const routes: Routes = [
    // { path: 'page', loadChildren: './page/page.module#PageModule' },
    // { path: 'home', loadChildren: './home/home.module#HomeModule' },
    // { path: 'category', loadChildren: './category/category.module#CategoryModule' },
    // { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
        PageModule,
        HomeModule,
        CategoryModule,
        ContactModule,
    ]
})
export class AppRoutingModule {}
