import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { Observable, first, map, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses'

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) { }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        // usar o first para obter a primeira resposta
        first(),
        
        // map _id to id from each course on array 
        map((courses: Course[]) => courses.map((courseData: any) => {
          const courseMap = {
            _id: courseData.id,
            category: courseData.category,
            name: courseData.name,
          } as Course
          return courseMap
        })),
        // fazer algo com o body do http get, no caso mostrar no console do navegador
        tap(courses => console.log(courses))
      )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
}
