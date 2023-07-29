import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>
  columnsToDisplay = ['name', 'category', 'actions'];

  chegou: boolean = true

  constructor(
    private readonly courseService: CoursesService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.courses$ = this.courseService.list().pipe(
      catchError(error => {
        this.courseService.onError('Erro ao carregar os cursos')
        return of([])
      })
    )
  }

  ngOnInit(): void { }

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
