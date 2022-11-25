import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFirePerformance} from '@angular/fire/performance';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
selectFile: File;
fileInFireBase: AngularFireStorageReference;
urlFile: string;
checkUpload = true;
@Output()
urlFromFireBase = new EventEmitter<string>()
  constructor(private afService: AngularFireStorage) { }

  ngOnInit(): void {
  }
  onChangeFile($event){
    this.selectFile = $event.target.files[0]
  }
  upLoad(){
    this.fileInFireBase = this.afService.ref(this.selectFile.name)
    this.fileInFireBase.put(this.selectFile).then(data =>{
      return data.ref.getDownloadURL();
    }).then(url =>{
      this.checkUpload = false;
      this.urlFile = url;
      this.urlFromFireBase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error =>{
      `Upload File Failed! ${error}`
    })
  }
}
