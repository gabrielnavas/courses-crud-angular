import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      _id: [null],
      name: [null],
      category: [null]
    })
  }

  onSubmit(): void {

  }

  onCancel(): void {

  }
}
