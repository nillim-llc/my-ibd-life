import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CallToAction } from '../models/call-to-action';
import { TextSection } from '../models/text-section';

@Injectable({
    providedIn: 'root'
})
export class TextSectionService {
    textSectionCollection: AngularFirestoreCollection<TextSection>;
    textSectionDoc: AngularFirestoreDocument<TextSection>;
    ctaDoc: AngularFirestoreDocument<CallToAction>;
    cta$: Observable<CallToAction>;
    textSection$: Observable<TextSection>;
    currentDate: number = Date.now();

    constructor(
        private afs: AngularFirestore,
    ) {
        this.currentDate = Date.now();
    }

    getAllTextSections(): Observable<TextSection[]> {
        this.textSectionCollection = this.afs.collection<TextSection>('textSections', (ref) => {
            return ref.orderBy('value', 'asc');
        });
        return this.textSectionCollection.valueChanges();
    }


    getTextSections(): Observable<TextSection[]> {
        // Ref, and order by title
        this.textSectionCollection = this.afs.collection(`textSections`,
            ref => ref.orderBy('value', 'asc')
        );
        // Gets array of textSections along with their uid.
        return this.textSectionCollection.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((a) => {
                    const data = a.payload.doc.data() as TextSection;
                    data.id = a.payload.doc.id;
                    return data;
                });
            })
        );
    }

    getTextSection(id: string): Observable<TextSection> {
        this.textSectionDoc = this.afs.doc<TextSection>(`textSections/${id}`);
        this.textSection$ = this.textSectionDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as TextSection;
                    data.id = action.payload.id;
                    // console.log('data in getTextSection()', data);
                    return data;
                }
            })
        );

        return this.textSection$;
    }


    getCallToAction(id: string): Observable<CallToAction> {
        this.ctaDoc = this.afs.doc<CallToAction>(`callToActions/${id}`);
        this.cta$ = this.ctaDoc.snapshotChanges().pipe(
            map((a) => {
                if (a.payload.exists === false) {
                    return null;
                } else {
                    const data = a.payload.data() as CallToAction;
                    data.id = a.payload.id;
                    // console.log('data in getTextSection()', data);
                    return data;
                }
            })
        );

        return this.cta$;
    }

}
