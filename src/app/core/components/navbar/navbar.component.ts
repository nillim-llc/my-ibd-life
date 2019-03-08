import { Component, OnInit } from '@angular/core';
import { Category } from '../../../category/models/category';
import { CategoryService } from '../../../category/services/category.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    categories: Category[];
    logo: string;
    icon: string;

    constructor(
        private categoryService: CategoryService,
    ) {
        // tslint:disable-next-line:max-line-length
        this.logo = `https://firebasestorage.googleapis.com/v0/b/my-ibd-life-dev.appspot.com/o/images%2F2019%2F1551821388572_my_ibd_life_logo_500.png?alt=media&token=7fe237dc-fe29-42fc-8031-210e0db40b52`;
    }

    ngOnInit() {
        this.categoryService.getTwoCategories().subscribe((cats: Category[]) => {
            if (cats) {
                this.categories = cats;
            }
        });
    }

}
