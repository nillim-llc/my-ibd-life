import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { CoreModule } from '../core/core.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryComponent } from './components/category.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoryService } from './services/category.service';
import { ContactUsService } from './services/contact-us.service';

@NgModule({
    declarations: [
        CategoryComponent,
        CategoryDetailComponent,
        ContactUsComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgFlashMessagesModule.forRoot(),
        CoreModule,
    ],
    providers: [
        CategoryService,
        ContactUsService,
    ]
})
export class CategoryModule {}
