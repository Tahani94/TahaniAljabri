import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
message: string = "Welcome To Student Webpage!";
inputValue: string = '';
Details="Details";
constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToStudentPage(): void {
    // Navigate to the student page
    this.router.navigate(['/student']);
  }

onInputChange(event: any){
  this.inputValue = event.target.value;
}
}

