import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseBackendService {
  url: string = 'https://test-api-3098f-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private http: HttpClient
  ) {}

  createTest(test: TestDto) {
    return this.http.post(this.url + 'posts.json', test,
    {
      observe: 'response', // używamy tego jeśli chcemy mieć dostęp do ałego obiektu HttpResponse z statusami itd.
      // poza response mamy do wyboru jeszcze body - defaultowe, zwraca samo body obiektu httpResponse oraz events
      responseType: 'json' // defaultowy jest json, mamy jeszcze text
    })
    .pipe(debounceTime(100));
  }

  getTests(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts.json')
      .pipe(
        map(response => {
          const result = [];
          for(const key in response) {
            if(response.hasOwnProperty(key)) {
             result.push({ ...response[key], id: key})
            }
          }
          return result;
        })
      )
  }

  deleteTests() {
    return this.http.delete(this.url + 'posts.json/');
  }
}

export class TestDto {
  constructor(
    public name: string,
    public description: string
  ) {}
}

export interface Post {
  name: string, 
  description: string, 
  id: number
}
