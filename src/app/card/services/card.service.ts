import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models/card';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    cardCollection: AngularFirestoreCollection<Card>;
    cardDoc: AngularFirestoreDocument<Card>;
    card$: Observable<Card>;
    cards$: Observable<Card[]>;
    loggedInUser: string;
    uid: string;

    constructor(
        private afs: AngularFirestore,
    ) {
    }

    getAllCards(): Observable<Card[]> {
        this.cardCollection = this.afs.collection<Card>('cards', (ref) => {
            return ref.orderBy('title', 'asc');
        });
        return this.cardCollection.valueChanges();
    }

    getCardsByTitle(title: string): Observable<Card[]> {
        this.cardCollection = this.afs.collection<Card>('cards', ref => {
            return ref.where('title', '==', `${title}`);
        });
        return this.cardCollection.valueChanges();
    }

    getCard(id: string): Observable<Card> {
        this.cardDoc = this.afs.doc<Card>(`cards/${id}`);
        this.card$ = this.cardDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as Card;
                    data.id = action.payload.id;
                    return data;
                }
            })
        );
        return this.card$;
    }
}
