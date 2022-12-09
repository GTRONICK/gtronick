import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gk-arch',
  templateUrl: './arch.component.html',
  styleUrls: ['./arch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {class: 'gk-arch'},
})
export class ArchComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public gotoSteps(): void {
    this.router.navigate(['steps'], { relativeTo: this.route });
  }

  public gotoHelp(): void {
    this.router.navigate(['help'], { relativeTo: this.route });
  }
}
