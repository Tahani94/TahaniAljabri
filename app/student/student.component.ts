import { Component, OnInit } from '@angular/core';

interface Student {
  Name: string;
  Email: string;
  Marks: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
Marks: number=0;

  students: any[] = [
    { Name: 'Tahani Aljabri', Email: 'Email@gmail.com', Marks: 55 },
    { Name: 'Fatma Alfarsi', Email: 'Email2@gmail.com', Marks: 30 },
    { Name: 'Maitha Alblooshi', Email: 'Email3@gmail.com', Marks: 60 },
    { Name: 'Rayan Algaribi', Email: 'Email4@gmail.com', Marks: 20 },
    { Name: 'Anwar Alhakhmani', Email: 'Email5@gmail.com', Marks: 75 },
    { Name: 'Aysha Alblooshi', Email: 'Email6@gmail.com', Marks: 88 },
    { Name: 'Hamda Alkaabi', Email: 'Email7@gmail.com', Marks: 45 },
    { Name: 'Asma Alsinani', Email: 'Email8@gmail.com', Marks: 93 },
    { Name: 'Nadeen Algaithi', Email: 'Email9@gmail.com', Marks: 45 },
    { Name: 'Rahma Alomrani', Email: 'Email10@gmail.com', Marks: 95 },
  ];

  

  getMarkColor(Marks: number): string{
return Marks < 50 ? 'red-text': 'green-text';
  }

  getPassFailStatus(Marks: number): string{
    return Marks > 50 ? 'PASS' : 'FAIL';
  }

  getRowStyles(student: Student): any {
    return {
      'background-color': student.Marks < 50 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 255, 0, 0.3)'
    };
  }

}



