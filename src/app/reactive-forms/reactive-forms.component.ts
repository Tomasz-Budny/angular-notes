import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  testReactiveForm: FormGroup;

  testSimpleFormValidation: FormGroup;

  nestedFormGroups: FormGroup;

  ngOnInit(): void {
    this.testReactiveForm = new FormGroup({
      username: new FormControl(null),
      emailWithTypo: new FormControl(null),
      gender: new FormControl('male')
    });

    // Test z prostą walidacją
    this.testSimpleFormValidation = new FormGroup({
      requiredField: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    })

    // Test z zagnieżdzonymi grupami
    this.nestedFormGroups = new FormGroup({
      group: new FormGroup({
        groupField: new FormControl(null, Validators.required)
      }),
      field: new FormControl(null, [Validators.required, Validators.email])
    });
  }
  
  onSubmit() {
    console.log(this.testReactiveForm);
  }
}
