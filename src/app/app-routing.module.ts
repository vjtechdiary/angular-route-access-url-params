import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // When your application loads this will be the default component
  {path: '', component: HomeComponent}, 
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  // To access parameters add New Component with modified path
  { path: 'user/:id', component: UserdetailComponent},
  { path: 'department', component: DepartmentComponent },
  // In case of any other path PageNotFoundComponent will load
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }