import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { Observable, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        // usar o first para obter a primeira resposta
        first(),
        // fazer algo com o body do http get, no caso mostrar no console do navegador
        tap(courses => console.log(courses))
      )
  }
}
