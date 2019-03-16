import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallToAction } from '../../models/call-to-action';
import { Page } from '../../models/page';
import { TextSection } from '../../models/text-section';
import { PageService } from '../../services/page.service';
import { TextSectionService } from '../../services/text-section.service';

@Component({
    selector: 'app-page-detail',
    templateUrl: './page-detail.component.html',
    styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
    page: Page;
    url: string;
    isIBDRelationships: boolean;
    cta: CallToAction;
    textSectionTop: TextSection;
    textSectionBottom: TextSection;

    constructor(
        private pageService: PageService,
        private route: ActivatedRoute,
        private tsService: TextSectionService,
    ) {
        this.url = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.pageService.getPage(this.url).subscribe((page: Page) => {
            if (page) {
                this.page = page;
                this.isIBDRelationships = page.category === 'ibd-relationships';
                if (page.contentSectionTop) {
                    this.tsService.getTextSection(page.contentSectionTop).subscribe((ts: TextSection) => {
                        this.textSectionTop = ts;
                    });
                }
                if (page.contentSectionBottom) {
                    this.tsService.getTextSection(page.contentSectionBottom).subscribe((ts: TextSection) => {
                        this.textSectionBottom = ts;
                    });
                }
                if (page.callToAction) {
                    this.tsService.getCallToAction(page.callToAction).subscribe((cta: CallToAction) => {
                        this.cta = cta;
                    });
                }
            }
        });
    }

}
