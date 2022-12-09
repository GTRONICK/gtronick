import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Step } from '../../interfaces/step.model';

@Component({
  selector: 'gk-arch-steps',
  templateUrl: './arch-steps.component.html',
  styleUrls: ['./arch-steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'gk-arch-steps'
  }
})
export class ArchStepsComponent implements OnInit{

  steps: Step[] = [];
  stepperIndex = 0;
  isGoingForward = true;
  searchTermMap: Map<string,string> = new Map();
  isCopyNotificationVisible:boolean = false;
  isCopyActive: Subject<boolean> = new Subject();
  isCopyActive$ = this.isCopyActive.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSteps();
  }

  getSteps(): void {
    const url = '../../../assets/resources/steps.json';
    this.http.get<Step[]>(url).subscribe( data => {
      this.steps = data;
    });
  }

  gotToStep(stepIndex?: number): void {
    let index = stepIndex;
    if(index != undefined) {
      this.checkDirection(index);
    } else {
      index = this.askForStepIndex();
    }
    this.checkForInput(index);
  }

  checkForInput(stepIndex: number): void {
    if( stepIndex > 0 && this.steps[stepIndex].input && this.steps[stepIndex].input?.varName ) {
      const searchTerm = this.steps[stepIndex].input?.varName || 'null';
      const varReplacement = window.prompt(this.steps[stepIndex].input?.prompt, "") || searchTerm;
      let previousReplacement: string = 'null';
      previousReplacement = this.searchTermMap.get(searchTerm) || 'null';
      this.searchTermMap.set(searchTerm, varReplacement ?? searchTerm);
      this.steps.forEach( step => {

        step.commands?.forEach( item => {
          item.command = item.command.replaceAll(
            previousReplacement !== 'null'
            ? previousReplacement 
            : searchTerm,
            varReplacement
          );
          let replacedComments: string[] = [];
          item.comments?.forEach(comment => {
            replacedComments.push( comment.replaceAll(
              previousReplacement !== 'null'
              ? previousReplacement 
              : searchTerm,
              varReplacement
            ));
          });
          item.comments = [...replacedComments];
        })
      });
    }
  }

  checkDirection(stepIndex: number): void {
    if ( stepIndex > this.stepperIndex && stepIndex < this.steps.length ) {
      this.isGoingForward = true;
      this.stepperIndex = stepIndex;
    } else if ( stepIndex < this.stepperIndex && stepIndex >= 0 ) {
      this.isGoingForward = false;
      this.stepperIndex = stepIndex;
    }
  }

  askForStepIndex(): number {
    const liStep = Number(window.prompt("Ir al paso:", ""));
    if(liStep > this.steps.length) {
      window.alert('Valor inválido, por favor intenta con un valor menor');
    } else if (liStep > 0) {
      this.stepperIndex = liStep - 1;
    }
    return liStep - 1;
  }

  showCopyNotification(): void {
    this.isCopyActive$.pipe(
      debounceTime(1500)
    ).subscribe( () => {
      this.isCopyNotificationVisible  = false;
    });
    this.isCopyNotificationVisible = true;
    this.isCopyActive.next(true);
  }
}
