import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Category } from '../../category/models/category';
import { CategoryService } from '../../category/services/category.service';
import { Home } from '../models/home';
import { HomeService } from '../services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    home: Home;
    category1: Category;
    category2: Category;


    constructor(
        private homeService: HomeService,
        private catService: CategoryService,
    ) {
    }

    ngOnInit() {
        // this.titleService.setTitle('MyIBD Life');
        this.homeService.getHome().subscribe((home: Home) => {
            if (home) {
                this.home = home;
            } else {
                return of(null);
            }
        });

        this.catService.getTwoCategories().subscribe((cat: Category[]) => {
            if (cat) {
                this.category1 = cat[0];
                this.category2 = cat[1];
            } else {
                return of(null);
            }
        });


    }


}
