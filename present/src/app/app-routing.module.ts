import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // HomeComponent
import { LoginComponent } from './login/login.component'; // LoginComponent
import { SignUpComponent } from './sign-up/sign-up.component'; // SignUpComponent
import { ActivityComponent } from './activity/activity.component'; // ActivityComponent
import { CreateclassComponent } from './createclass/createclass.component'; // CreateClassComponent
import { JoinclassComponent } from './joinclass/joinclass.component'; // JoinClassComponent


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  // Home route
  { path: 'login', component: LoginComponent },  // Login route
  { path: 'signup', component: SignUpComponent },  // SignUp route
  { path: 'activity', component: ActivityComponent },  // Activity route
  { path: 'createclass', component: CreateclassComponent },  // Create Class route
  { path: 'joinclass', component: JoinclassComponent },  // Join Class route



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
