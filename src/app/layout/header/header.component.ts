import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'gk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'gk-header' },
})
export class HeaderComponent implements OnInit{

  showBackButton: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd )
      this.showBackButton = event.urlAfterRedirects != '/arch';
    });
  }

  goBack(): void {
    this.router.navigate(['arch']);
  }

}
