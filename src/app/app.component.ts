import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    textSections$: Observable<object[]>;

    constructor(
        private afs: AngularFirestore,
        private router: Router,
    ) {
        // Makes pages scroll to top of page on routerLink navigation.
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngOnInit(): void {
        this.textSections$ = this.afs.collection('textSections').valueChanges();
    }
}
