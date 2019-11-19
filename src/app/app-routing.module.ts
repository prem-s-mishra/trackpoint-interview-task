import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component'
 
const routes: Routes = [
  { path: 'list-user', component: ListUserComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'view-user/:id', component: ViewUserComponent },
  { path: '', redirectTo: '/list-user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }