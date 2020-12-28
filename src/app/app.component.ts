import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { DropdownService } from './services/dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService, DropdownService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  products$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService, dropdownService: DropdownService) {

    dropdownService.getBrand().subscribe();
    dropdownService.getSize().subscribe();
    this.questions$ = service.getQuestions();
    this.products$ = service.getProductDetails();



  }

  ngOninit(){
  }
}