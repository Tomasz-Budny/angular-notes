import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { containsOnlyLowerCaseLetters, doesntHaveAnyPolishProfanities, NickisUnique } from './custom-validators';

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
  formArraytest: FormGroup;
  formCustomValidators: FormGroup;

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

    // test FormArray
    this.formArraytest = new FormGroup({
      members: new FormArray([])
    })

    //test custom Validators
    this.formCustomValidators = new FormGroup({
      nick: new FormControl('', doesntHaveAnyPolishProfanities()),
      small: new FormControl('', containsOnlyLowerCaseLetters()),
      // async validator idzie jako 3 argument
      asyncField: new FormControl('', [], NickisUnique(1000))
    });
  }

  get members() {
    const members = <FormArray>this.formArraytest.get('members');
    return members;
  }

  onAddMemmber() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.formArraytest.get('members')).push(control);
  }
  
  onSubmit() {
    console.log(this.testReactiveForm);
  }
}
