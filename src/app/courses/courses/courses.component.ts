import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>
  columnsToDisplay = ['name', 'category'];

  chegou: boolean = true

  constructor(
    private readonly courseService: CoursesService 
  ) {
    this.courses$ = this.courseService.list().pipe(
      catchError(error => {
        console.log(error);
        
        return of([])
      })
    )
  }

  ngOnInit(): void { }
}
