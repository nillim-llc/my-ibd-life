import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const contactRoutes: Routes = [
    { path: 'contact', component: ContactDetailComponent },

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
