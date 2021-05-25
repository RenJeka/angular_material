import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { MY_DYNAMIC_FORM_MODEL } from './form.model';

@Component({
  selector: 'app-dynamic-forms-one',
  templateUrl: './dynamic-forms-one.component.html',
  styles: [
    `form {
      width: 1024px;
      margin: 0 auto;
      padding: 30px;
    }
    
    `
  ]
})
export class DynamicFormsOneComponent implements OnInit {

  formModel: DynamicFormModel = MY_DYNAMIC_FORM_MODEL;
  formGroup: FormGroup

  constructor(
    private formService: DynamicFormService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
