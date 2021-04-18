import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  // inyectamos el HttpClient en el constructor del servicio
  constructor(private http: HttpClient) { }

  /*
  login(user:User): Observable<boolean> {
    return of(true);
  }*/


  login(user: User): Observable<any>{
    let body = {
      email: user.email,
      password: user.password
      // ...user
    }
    // http siempre devuelve observables
    return  this.http.post('https://reqres.in/api/login', user)
  }


  get loggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }




}
