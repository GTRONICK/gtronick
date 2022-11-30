import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'gk-sidebar' }
})
export class SidebarComponent {

}
