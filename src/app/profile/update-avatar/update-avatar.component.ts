import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from '../../model/ChangeAvatar';
import {AuthService} from '../../serivce/auth.service';
import {TokenService} from '../../serivce/token.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {
 updateAvatar: ChangeAvatar
  checkUpload = false
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeAvatar($event: string) {
    this.updateAvatar = new ChangeAvatar($event);
    this.authService.updateAvatar(this.updateAvatar).subscribe(data =>{
      if (data.message === 'yes'){
        this.checkUpload = true
        this.tokenService.setAvatar($event);
        this.dialog.open(DialogComponent);
        // location.reload()
      }
    })
  }
}
