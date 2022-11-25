import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../serivce/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string
  avatar: string
  roles: string[]
  constructor(private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      console.log('có gì ở đây k',this.avatar);
      this.roles = this.tokenService.getRole();
    }
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['']).then(()=>{
      location.reload();
    })
  }
}
