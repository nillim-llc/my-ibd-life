import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    categoryCollection: AngularFirestoreCollection<Category>;
    categoryDoc: AngularFirestoreDocument<Category>;
    category$: Observable<Category>;
    categories$: Observable<Category[]>;


    constructor(
        private afs: AngularFirestore,
        private router: Router,
    ) {

    }

    getTwoCategories(): Observable<Category[]> {
        this.categoryCollection = this.afs.collection<Category>('categories', ref => {
            return ref.limit(2);
        });
        return this.categoryCollection.valueChanges();
    }

    getCategoryByTitle(title: string): Observable<Category[]> {
        this.categoryCollection = this.afs.collection<Category>('categories', ref => {
            return ref.where('title', '==', `${title}`);
        });
        return this.categories$ = this.categoryCollection.valueChanges();
    }

    getCategory(slug: string): Observable<Category> {
        this.categoryDoc = this.afs.doc<Category>(`categories/${slug}`);
        this.category$ = this.categoryDoc.snapshotChanges().pipe(
            map((action) => {
                if (action.payload.exists === false) {
                    return null;
                } else {
                    const data = action.payload.data() as Category;
                    data.slug = action.payload.id;
                    return data;
                }
            })
        );
        return this.category$;
    }


}
