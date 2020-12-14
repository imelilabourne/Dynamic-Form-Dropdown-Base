import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  toFormGroupProduct(products: QuestionBase<string>[] ) {
    const group: any = {};

    products.forEach(product => {
      group[product.key] = product.required ? new FormControl(product.value || '', Validators.required)
                                              : new FormControl(product.value || '');
    });
    return new FormGroup(group);
  }
}

