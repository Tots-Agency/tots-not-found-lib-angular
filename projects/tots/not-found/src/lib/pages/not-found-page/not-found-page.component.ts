import { Component, OnInit } from '@angular/core';
import { TotsNotFoundPageConfig } from '../../entities/tots-not-found-page-config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tots-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class TotsNotFoundPageComponent implements OnInit {
  config!: TotsNotFoundPageConfig;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickReturn() {
    this.router.navigate([this.config.pathHome]);
  }

  loadConfig() {
    this.route.data
    .subscribe(params => {
      this.config = params as TotsNotFoundPageConfig;
    });
  }
}
