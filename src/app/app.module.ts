import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './form-login/login/login.component';
import {ProfileComponent} from './profile/profile/profile.component';
import { UploadComponent } from './upload/upload.component';
import {environment} from '../environments/environment.prod';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthInterceptor} from './serivce/auth.interceptor';
import { UpdateAvatarComponent } from './profile/update-avatar/update-avatar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DialogCategoryComponent } from './category/dialog-category/dialog-category.component';
import { PageCategoryComponent } from './category/page-category/page-category.component';
import { PageProductsComponent } from './product/page-products/page-products.component';






export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'profile', component: ProfileComponent,
  children:[{path: 'update-avatar',component: UpdateAvatarComponent}]},
  {path: 'home', component: AppComponent},
  {path:'category', component: ListCategoryComponent},
  {path: 'create-category',component:CreateCategoryComponent},
  {path: 'update-category/:id',component: UpdateCategoryComponent},
  {path: 'products', component: PageProductsComponent},
  {path: 'page-category', component: PageCategoryComponent},
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, UploadComponent, UploadFileComponent, UpdateAvatarComponent, DialogComponent, ListCategoryComponent, CreateCategoryComponent, UpdateCategoryComponent, DialogCategoryComponent, PageCategoryComponent, PageProductsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    MatDialogModule,
    MatPaginatorModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
