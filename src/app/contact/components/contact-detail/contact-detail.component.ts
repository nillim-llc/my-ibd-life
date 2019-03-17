import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Contact } from '../../models/contact';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
    newContact: FormGroup;
    contact: Contact;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    body: string;
    sentDate: number;
    id: string;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactUsService,
        private titleService: Title,
        private meta: Meta,
        private ngFlashMessageService: NgFlashMessageService
    ) {
        this.sentDate = Date.now();
        // this.bannerImage = 'https://s3.amazonaws.com/DDW/ddw-org/images/banners/interior-bg.jpg';
    }

    // For Form Validations
    get f() {
        return this.newContact.controls;
    }

    ngOnInit() {
        this.titleService.setTitle(`Contact Us - MyIBD Life`);


        // Form:
        this.newContact = this.fb.group({
            firstName: [this.firstName, Validators.required],
            lastName: [this.lastName, Validators.required],
            email: [this.email, Validators.required],
            phoneNumber: ['' || this.phoneNumber],
            subject: [this.subject, Validators.required],
            body: [this.body, Validators.required],
            sentDate: [this.sentDate],
        });

        this.firstName = this.newContact.value.firstName;
        this.lastName = this.newContact.value.lastName;
        this.email = this.newContact.value.email;
        this.phoneNumber = this.newContact.value.phoneNumber;
        this.subject = this.newContact.value.subject;
        this.body = this.newContact.value.body;
        this.sentDate = this.newContact.value.sentDate;
    }

    onNewContact(formData: Contact) {
        if (!this.newContact.valid) {
            this.ngFlashMessageService.showFlashMessage({
                messages: [`Required form values are missing or phone number is not in correct format, Form NOT sent.`],
                dismissible: true,
                timeout: false,
                type: 'warning'
            });
        } else {
            this.contactService.setContact(formData)
                .then(() => {
                    // this.sendEmail(formData);
                    console.log('sendEmail(formData)', formData);
                });
            this.newContact.reset();
        }
    }

    sendEmail(formData: Contact) {
        const endpoint = `https://us-central1-ddw-org.cloudfunctions.net/firestoreEmail`;
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            subject: formData.subject,
            body: formData.body,
        };
        console.log('data in sendEmail', data);

        // this.httpClient.post(endpoint, data).subscribe();
    }
}
