import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any>{
    let body = {
      email: user.email,
      password: user.password
    }
    // http siempre devuelve observables
    return  this.http.post('https://reqres.in/api/register', user)
  }
}
