import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../question-base';

@Component({
  selector: 'app-products',
  templateUrl: './common-fields-controls.component.html',
  styleUrls: ['./common-fields-controls.component.css']
})
export class ProductsComponent {
  @Input() product: QuestionBase<string>;
  @Input() newForm: FormGroup;
  get isValid() { return this.newForm.controls[this.product.key].valid; }
}
