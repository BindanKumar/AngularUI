import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{path:"",component:StudentComponent},
{path:"course",component:CoursesComponent},
{path:"students",component:StudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
