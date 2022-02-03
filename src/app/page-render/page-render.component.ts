import { Component, OnInit, OnDestroy } from '@angular/core';
import { Page, ContentstackService } from '../shared';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-render',
  templateUrl: './page-render.component.html',
  styleUrls: ['./page-render.component.css']
})
export class PageRenderComponent implements OnInit, OnDestroy {

  page: Page;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ContentstackService,
    private titleService: Title, 
    private metaService: Meta) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const rout = params.id
      this.service.getPage(rout)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(page => {
            if(page){
              this.page = page;

              this.titleService.setTitle(page.title);
              this.metaService.addTags([
                {name: 'description', content: page.description},
                {name: 'og:url', content: page.rout},
                {name: 'og:title', content: page.title},
                {name: 'og:site_name', content: page.company},
                {name: 'og:description', content: page.description},
                {name: 'og:image', content: page.image},
              ]);
            }
            else
              this.router.navigate(['/page-error']);
        });
    }); 
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}