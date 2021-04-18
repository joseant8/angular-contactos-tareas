import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs'
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  authSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }


  login(): void {

    if(this.loginForm.valid && this.loginForm.value.username && this.loginForm.value.password){
      let user: User = new User(this.loginForm.value.username, this.loginForm.value.password)

      this.authSubscription = this.authService.login(user).subscribe((response) => {
        if(response.token){
          console.log(`Token: ${response.token}`);
          // Set Token in Session Storage of our Navigator
          sessionStorage.setItem('Token', response.token);
          // We set loggedIn in our Service in order to be able to navigate to Home
          this.authService.setLoggedIn(true);
          // Navigation to "/Home"
          // In this moment, the AuthGuard will be executed, as we are trying to acces to
          // HomePage that has the canActivate assigned to it
          this.router.navigate(['/home']);
        }else{
          alert('Error: No Token Received');
          this.authService.setLoggedIn(false);
          sessionStorage.removeItem('Token');
        }
      });
    } else {
      this.authService.setLoggedIn(false);
      alert('You must provide a username and a valid password')
    }
  }



}
