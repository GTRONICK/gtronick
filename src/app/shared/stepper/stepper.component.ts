import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gk-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'gk-stepper'
  }
})
export class StepperComponent {

  @Input() stepperIndex: number = 0;
  @Input() totalLength: number = 0;
  @Output() onStep: EventEmitter<number> = new EventEmitter();

  gotToStep(step?: number): void {
    this.onStep.emit(step);
  }
}
