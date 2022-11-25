import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/JwtResponse';
import {SignInForm} from '../model/SignInForm';
import {ChangeAvatar} from '../model/ChangeAvatar';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private API_SIGNUP = environment.API_LOCAL + 'signup';
  // private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_SIGNUP = environment.API_SEVER + 'auth/signup';
  private API_SIGNIN = environment.API_SEVER + 'auth/signin';
  private API_CHANGE_AVATAR = environment.API_SEVER + 'auth/change/avatar';
  constructor(private http: HttpClient) {}
  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post(this.API_SIGNUP, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signInForm);
  }
  updateAvatar( changeAvatar: ChangeAvatar) : Observable<any>{
    return this.http.put(this.API_CHANGE_AVATAR,changeAvatar);
  }
}
