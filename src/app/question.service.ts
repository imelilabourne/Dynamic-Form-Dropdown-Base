import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  constructor(private http:HttpClient){}
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const Sizes = JSON.parse(sessionStorage.getItem('Sizes'));
    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: Sizes.key,
        label: Sizes.label,
        options: Sizes.options,
        order: Sizes.order
      }),
      
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Eli Labourne',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getProductDetails(){
    const Brands = JSON.parse(sessionStorage.getItem('Brands'));
    const products: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: Brands.key,
        label: Brands.label,
        options: Brands.options,
        order: Brands.order
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'phoneNumber',
        label: 'Phone Number',
        type: 'email',
        order: 2
      })
    ];

    return of(products.sort((a, b) => a.order - b.order));
  }
}
