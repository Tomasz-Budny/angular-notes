import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirebaseBackendService, Post, TestDto } from './firebase-backend.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent implements OnInit {
  testForm: FormGroup;
  data$: Observable<Post[]>;

  constructor(
    private firebaseService: FirebaseBackendService 
  ) {}

  ngOnInit(): void {
    this.testForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
    this.data$ = this.firebaseService.getTests();

  }

  onCreateTest() {
    const valid = this.testForm.valid
    if(valid) {
      const testDto = this.testForm.value as TestDto;
      this.firebaseService.createTest(testDto).subscribe(response => {
        console.log(response);
        this.data$ = this.firebaseService.getTests();
      })
    }
  }

  onDeleteElement() {
    this.firebaseService.deleteTests().subscribe(() => {
      this.data$ = this.firebaseService.getTests();
    });
  }
}
