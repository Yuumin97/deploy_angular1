import { Component, OnInit } from '@angular/core';
import {SignInForm} from '../../model/SignInForm';
import {AuthService} from '../../serivce/auth.service';
import {TokenService} from '../../serivce/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  signInForm: SignInForm;
  status = '';
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.status);
    this.status = localStorage.getItem('SUCCESS_KEY');
    if (localStorage.getItem('SUCCESS_KEY') != null) {
      this.status = localStorage.getItem('SUCCESS_KEY');
    } else {
      this.status = 'Vui lòng điền vào mẫu đăng nhập ';
    };
  };
  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log('data-------->', data);
      if( data.token != undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setRole(data.roles);
        localStorage.removeItem('SUCCESS_KEY')
        this.router.navigate(['profile'])
      }
      // @ts-ignore
      if (data.status == 202){
        this.status = 'Đăng nhập thất bại ! Vui lòng kiểm tra lại tài khoản và mật khẩu'
      }
    });
  }
}
