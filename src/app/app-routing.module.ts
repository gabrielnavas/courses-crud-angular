import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // if acess root of the application, render this
  {
  path: '', 
  pathMatch: 'full',
  redirectTo: 'courses'
}, {
  path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
