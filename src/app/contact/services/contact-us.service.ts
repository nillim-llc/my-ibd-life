import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {
    contact: Observable<Contact>;

    constructor(
        private afs: AngularFirestore,
        private router: Router,
    ) {
    }

    setContact(formData): void {
        // Creates new pressRelease with slug as the id
        const newId = this.afs.createId();
        const contactRef: AngularFirestoreDocument<Contact> = this.afs.doc(`contacts/${newId}`);

        const data: Contact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            subject: formData.subject,
            body: formData.body,
            sentDate: Date.now(),
            viewed: formData.viewed || false,
            id: newId,
        };

        contactRef.set(data)
                  .then(() => {
                  })
                  .catch((error) => {
                      console.error(error);
                  });
    }


}
