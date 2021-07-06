import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/assets/model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  message:any="";
  @Input() id: number = 0;
  @Input() courses: string[] = ["Java", "C#", "Angular", "ReactJS", "JavaScript"];
  coursesFormControl = new FormControl();
  studentData!: Student;
  constructor(private route: ActivatedRoute, public studentService: StudentService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        console.log(params.id);
      }
      );
    this.studentService.getStudent(this.id).subscribe(resp => {
      if (resp != null) {
        this.studentData = resp;
        this.coursesFormControl.setValue(resp.course);
      }
    })
  }
  UpdateCourses() {
    this.studentData.course = this.coursesFormControl.value;
    if (this.studentData != null) {
      this.studentService.updateStudent(this.studentData).subscribe(resp =>{this.message="Courses Are Updated!";
      setTimeout(() => {
        this.message = "";
      }, 3000)});
    }
  }

}
