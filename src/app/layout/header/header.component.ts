import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'gk-header' },
})
export class HeaderComponent {

}
