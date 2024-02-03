import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  login() {
    console.log('logged in');
    this.router.navigate(['']);
  }
}
