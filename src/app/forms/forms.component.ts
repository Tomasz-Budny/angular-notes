import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @ViewChild('data') receivedData: ElementRef<HTMLParagraphElement>;

  answer: string;

  onSubmitTest(form: NgForm) {
    console.log(form.value);
    this.receivedData.nativeElement.innerText = form.value.test;
  }
}
