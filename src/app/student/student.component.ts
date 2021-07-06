import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/assets/model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber'];
  data: Student[] = [];
  dataSource = new MatTableDataSource<Student>(this.data);
  expandedElement!: Student | null;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public studentService: StudentService,private router: Router,private route: ActivatedRoute) {
   
  }
  tableRowClick(row:Student){
    this.router.navigate(['course'],{ queryParams: { id: row.id } });
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(resp => {
      if (resp != null) {
        resp.forEach(student => this.data.push(student));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  ngAfterViewInit() {
    
  }

}
