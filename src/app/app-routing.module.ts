import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedbComponent } from './home/homedb/homedb.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';
import { DrdpageComponent } from './home/drdpage/drdpage.component';

const routes: Routes = [
  //
  { path: '', component: HomedbComponent },
  { path: 'tasks', component: TaskdetailsComponent },
  { path: 'drd', component: DrdpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
