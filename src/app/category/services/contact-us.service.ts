import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {
    contactCollection: AngularFirestoreCollection<Contact>;
    contactDoc: AngularFirestoreDocument<Contact>;
    contact: Observable<Contact>;
    contacts$: Observable<Contact[]>;

    constructor(
        private afs: AngularFirestore,
        private router: Router,
        private ngFlashMessageService: NgFlashMessageService
    ) {
    }

    getAllContacts(sortValue): Observable<Contact[]> {
        // Ref, and order by title
        console.log('sortValue', sortValue);
        this.contactCollection = this.afs.collection(`contacts`,
            ref => ref.orderBy(sortValue, 'asc')
        );
        // Gets array of pressReleases along with their uid.
        return this.contactCollection.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((a) => {
                    const data = a.payload.doc.data() as Contact;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );

    }

    getAllUnviewedContacts(): Observable<Contact[]> {
        this.contactCollection = this.afs.collection(`contacts`,
            ref => ref.where('viewed', '==', false)
        );
        // Gets array of pressReleases along with their uid.
        return this.contactCollection.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((a) => {
                    const data = a.payload.doc.data() as Contact;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );
    }

    getContact(id: string): Observable<Contact> {
        this.contactDoc = this.afs.doc<Contact>(`contacts/${id}`);
        this.contact = this.contactDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as Contact;
                    data.id = action.payload.id;
                    console.log('data in getContact', data);
                    return data;
                }
            })
        );

        return this.contact;
    }


    setContact(formData): Promise<void> {
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

        return contactRef.set(data)
                         .then(() => {
                             this.ngFlashMessageService.showFlashMessage({
                                 messages: [`Message sent successfully, Thank you!`],
                                 dismissible: true,
                                 timeout: false,
                                 type: 'success'
                             });
                         })
                         .catch((error) => {
                             console.error(error);
                             this.ngFlashMessageService.showFlashMessage({
                                 messages: [`Something went wrong message not sent.`],
                                 dismissible: true,
                                 timeout: false,
                                 type: 'Danger'
                             });
                         });
    }

    deleteContact(id: string): void {
        this.contactDoc = this.afs.doc<Contact>(`contacts/${id}`);
        if (confirm(`Are you sure you want to delete this Contact? This is irreversible.`)) {
            this.contactDoc.delete()
                .then(() => {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [`Contact Deleted`],
                        dismissible: true,
                        timeout: false,
                        type: 'info'
                    });
                })
                .catch((error) => {
                    this.ngFlashMessageService.showFlashMessage({
                        messages: [`${error}`],
                        dismissible: true,
                        timeout: false,
                        type: 'danger'
                    });
                    console.log(`ERROR~dC: `, error);
                });
        }
    }

    setViewedContact(id) {
        this.afs.doc(`contacts/${id}`).set({
            viewed: true
        }, { merge: true })
            .then(() => {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [`Contact Viewed`],
                    dismissible: true,
                    timeout: false,
                    type: 'info'
                });
            })
            .catch((error) => {
                this.ngFlashMessageService.showFlashMessage({
                    messages: [`${error}`],
                    dismissible: true,
                    timeout: false,
                    type: 'danger'
                });
                console.log('Error~sVC:', error);
            });
    }

    setUnviewedContact(id) {
        this.afs.doc(`contacts/${id}`).set({
            viewed: false
        }, { merge: true })
            .then(() => {

            })
            .catch((error) => {
                console.log('Error~sVC:', error);
            });
    }
}
