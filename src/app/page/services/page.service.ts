import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../models/page';

@Injectable({
    providedIn: 'root'
})
export class PageService {
    pageCollection: AngularFirestoreCollection<Page>;
    pageDoc: AngularFirestoreDocument<Page>;
    page: Observable<Page>;
    pages$: Observable<Page[]>;
    newSlug: string;

    constructor(
        private readonly afs: AngularFirestore,
        private readonly router: Router,
    ) {
    }

    getAllPages(): Observable<Page[]> {
        return this.afs.collection<Page>('pages').valueChanges();
    }

    getPages(): Observable<Page[]> {
        // Ref, and order by title
        this.pageCollection = this.afs.collection(`pages`,
            ref => ref.orderBy('url', 'asc')
        );
        // Gets array of pages along with their uid.
        return this.pageCollection.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((a) => {
                    const data = a.payload.doc.data() as Page;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );
    }

    getPage(url: string): Observable<Page> {
        this.pageDoc = this.afs.doc<Page>(`pages/${url}`);
        this.page = this.pageDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as Page;
                    data.id = action.payload.id;
                    // console.log('data in getPage()', data);
                    return data;
                }
            })
        );

        return this.page;
    }
}
