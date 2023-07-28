import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  list(): Course[] {
    return [{
      _id: '@!123',
      name: 'Angular',
      category: 'Front-End'
    }]
  }
}
