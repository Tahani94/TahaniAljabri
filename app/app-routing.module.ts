import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component'; // Import the StudentComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' }, // Redirect to Student page
  { path: 'student', component: StudentComponent }, // Add the StudentComponent route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
