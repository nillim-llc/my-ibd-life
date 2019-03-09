import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
    category: Category;
    slug: string;

    constructor(
        private afs: AngularFirestore,
        private catService: CategoryService,
        private route: ActivatedRoute,
    ) {
        this.route.params.pipe(
            switchMap((params: Params) => {
                this.slug = params['id'];

                return this.catService.getCategory(this.slug);
            })
        ).subscribe((category) => {
            this.category = category;
        });
    }

    ngOnInit() {
    }

}
