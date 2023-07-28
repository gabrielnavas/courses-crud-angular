import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  columnsToDisplay = ['name', 'category'];

  constructor(
    private readonly courseService: CoursesService 
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.list()
  }
}
