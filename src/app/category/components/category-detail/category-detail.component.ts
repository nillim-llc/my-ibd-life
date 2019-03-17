import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Card } from '../../../card/models/card';
import { CardService } from '../../../card/services/card.service';
import { Page } from '../../../page/models/page';
import { PageService } from '../../../page/services/page.service';
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
    pages$: Observable<Page[]>;
    cards$: Observable<Card[]>;
    card1: Card;
    card2: Card;
    card3: Card;
    card4: Card;
    card5: Card;
    card6: Card;
    card7: Card;
    card8: Card;

    constructor(
        private afs: AngularFirestore,
        private catService: CategoryService,
        private route: ActivatedRoute,
        private pageService: PageService,
        private cardService: CardService,
    ) {
        this.route.params.pipe(
            switchMap((params: Params) => {
                this.slug = params['id'];
                this.pages$ = this.pageService.getPages(this.slug);
                return this.catService.getCategory(this.slug);
            })
        ).subscribe((category) => {
            if (category) {
                this.category = category;

                if (category.card1 !== '') {
                    this.cardService.getCard(category.card1).subscribe((card1) => {
                        this.card1 = card1;
                    });
                }
                if (category.card2 !== '') {
                    this.cardService.getCard(category.card2).subscribe((card2) => {
                        this.card2 = card2;
                    });
                }
                if (category.card3 !== '') {
                    this.cardService.getCard(category.card3).subscribe((card3) => {
                        this.card3 = card3;
                    });
                }
                if (category.card4 !== '') {
                    this.cardService.getCard(category.card4).subscribe((card4) => {
                        this.card4 = card4;
                    });
                }
                if (category.card5 !== '') {
                    this.cardService.getCard(category.card5).subscribe((card5) => {
                        this.card5 = card5;
                    });
                }
                if (category.card6 !== '') {
                    this.cardService.getCard(category.card6).subscribe((card6) => {
                        this.card6 = card6;
                    });
                }
                if (category.card7 !== '') {
                    this.cardService.getCard(category.card7).subscribe((card7) => {
                        this.card7 = card7;
                    });
                }
                if (category.card8 !== '') {
                    this.cardService.getCard(category.card8).subscribe((card8) => {
                        this.card8 = card8;
                    });
                }
            }
        });
    }

    ngOnInit() {

    }

}
