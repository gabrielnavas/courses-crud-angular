import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup

  categories = ['front-end', 'back-end']

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  onSubmit(): void {
    this.courseService.save({
      _id: "",
      category: this.form.value.category,
      name: this.form.value.name,
    })
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => this.onError(),
      complete: () => this.onSucess()
    })
  }

  onCancel(): void {
    this.location.back()
  }

  private onError() {
    this .snackBar.open('Tente novamente mais tarde', 'X', { duration: 5000 })
  }

  private onSucess() {
    this.snackBar.open('Curso salvo!', 'X', { duration: 10000 })
    this.location.back()
  }
}
