import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownService } from '../dropdown.service';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'common-fields-formgroup',
  templateUrl: './common-fields-formgroup.component.html',
  styleUrls: ['./common-fields-formgroup.component.css']
})
export class CommonFieldsFormgroupComponent implements OnInit {
  newForm: FormGroup;
  payLoad = '';

  @Input() products: QuestionBase<string>[] = [];
  constructor(private qcs: QuestionControlService, private dpService: DropdownService
  ) { }

  ngOnInit() {
    this.newForm = this.qcs.toFormGroupProduct(this.products);
    this.dpService.getBrand().subscribe();
    this.dpService.getSize().subscribe()
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.newForm.getRawValue());
  }
}
