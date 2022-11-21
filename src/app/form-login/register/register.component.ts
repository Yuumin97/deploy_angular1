import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {AuthService} from '../../serivce/auth.service';
import {SignUpForm} from '../../model/SignUpForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
form: any = {};
emailFormControl = new FormControl('', [
  Validators.email
]);
hide = true;
signUpForm: SignUpForm;
status = 'Please fill in the form to create account';
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log('data --->', data);
      if (data.message === 'nouser'){
        this.status = 'Username is existed! Please try again';
        return;
      }
      if (data.message === 'noemail'){
        this.status = 'Email is existed! Please try again';
        return;
      }
      if (data.message === 'yes'){
        this.status = 'Create success!';
        localStorage.setItem('SUCCESS_KEY', this.status);
        this.router.navigate(['login']);
        return;
      }
    }, error => {
      console.log('error---->', error);
      this.status = 'Email invalid! Please try again';
    });
  }
}
