import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User = new User('', '');

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login(this.user).subscribe((response) => {
      // obtenemos el token
      console.log('Token: ', response.token)
    });
  }




}
