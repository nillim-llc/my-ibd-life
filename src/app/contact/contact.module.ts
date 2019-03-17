import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactDetailComponent,
        ContactComponent,
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
    ]
})
export class ContactModule {}
