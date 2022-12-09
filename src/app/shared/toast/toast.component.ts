import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gk-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'gk-toast'
  }
})
export class ToastComponent {

}
