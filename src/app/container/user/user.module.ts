import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const userRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [UserComponent, RegisterComponent, LoginComponent],
  imports: [
    RouterModule.forRoot(userRoutes),
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
