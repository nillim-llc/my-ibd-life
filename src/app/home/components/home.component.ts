import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Home } from '../models/home';
import { HomeService } from '../services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    home: Home;

    constructor(
        private homeService: HomeService,
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


    }


}
