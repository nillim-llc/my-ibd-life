import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Home } from '../models/home';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    homeDoc: AngularFirestoreDocument<Home>;
    home$: Observable<Home>;
    homeId: string;

    constructor(
        private afs: AngularFirestore,
    ) {
        this.homeId = 'iaid7gh0P4Zjqw8dL9CU';
    }


    getHome(): Observable<Home> {
        this.homeDoc = this.afs.doc<Home>(`homePage/${this.homeId}`);
        this.home$ = this.homeDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as Home;
                    data.id = action.payload.id;
                    return data;
                }
            })
        );

        return this.home$;
    }


}
