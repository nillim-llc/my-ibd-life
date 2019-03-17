import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactComponent } from './components/contact.component';

const contactRoutes: Routes = [
    {
        path: 'contact', component: ContactComponent, children: [
            { path: '', component: ContactDetailComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContactRoutingModule {}
