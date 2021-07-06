import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/assets/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public APIURL = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(
      this.APIURL);
  }
  getStudent(id:any): Observable<Student> {
    return this.http.get<Student>(
      this.APIURL + "/" + id);
  }
  updateStudent(student:any){
    console.log("put");
    return this.http.put<Student[]>(
      this.APIURL + "/" + student.id,student);
  }

}
