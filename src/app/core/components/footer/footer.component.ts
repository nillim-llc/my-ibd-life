import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    myIbdLifeLogo: string;

    constructor() {
        this.myIbdLifeLogo = `https://firebasestorage.googleapis.com/v0/b/my-ibd-life-dev.appspot.com/o/images%2F2019%2F1552335053957_aga_logo_gi_patient_center_single_rev_cmyk.png?alt=media&token=54edfae9-8618-455e-9734-d5a166c58da0`;
    }

    ngOnInit() {
    }

}
