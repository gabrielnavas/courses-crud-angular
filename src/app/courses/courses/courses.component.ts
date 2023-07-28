import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    this.courses$ = this.courseService.list()
  }

  ngOnInit(): void { }
}
