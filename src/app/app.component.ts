import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';

  course: string = '';
  courses: string[] = [];
  placeHolderText: string = 'Enter Course';

  constructor() {}

  addCourse() {
    this.courses.push(this.course.toUpperCase());
    this.course = '';
  }

  removeCourse(index: number) {
    this.courses.splice(index, 1);
  }
}
