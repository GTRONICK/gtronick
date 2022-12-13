import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gk-pie-menu',
  templateUrl: './pie-menu.component.html',
  styleUrls: ['./pie-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'gk-pie-menu'
  }
})
export class PieMenuComponent {

  showPieMenu: boolean = false;

}
