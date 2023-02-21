import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-forms-assign',
  templateUrl: './forms-assign.component.html',
  styleUrls: ['./forms-assign.component.css']
})
export class FormsAssignComponent implements AfterViewInit{
  @ViewChild('form') form: NgForm;
  textAfterSubmit: string;

  ngAfterViewInit() {
    this.form.form.patchValue({subscription: 'advanced'});
  }

  onSubmit() {
    if(this.form.invalid)
      return;

    console.log(this.form.value);

    this.textAfterSubmit = this.form.value.email + ' ' + this.form.value.password + ' ' + this.form.value.subscription; 
  }
}
