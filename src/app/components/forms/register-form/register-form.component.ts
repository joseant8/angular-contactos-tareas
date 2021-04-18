import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  registerSubscription: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });
  }

  submitRegisterForm(): void {
    // console.table(this.registerForm.value);
    if(this.registerForm.valid && this.registerForm.value.email && this.registerForm.value.password){
      let user: User = new User(this.registerForm.value.email, this.registerForm.value.password)

      this.registerSubscription = this.registerService.register(user).subscribe((response) => {
        if(response.token){
          sessionStorage.setItem('Token', response.token);
          this.authService.setLoggedIn(true);
          this.router.navigate(['/home']);
        }else{
          alert('Error: No se ha recibido el token');
          this.authService.setLoggedIn(false);
          sessionStorage.removeItem('Token');
        }
      });
    }
  }

}
