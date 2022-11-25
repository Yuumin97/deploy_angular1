import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORIES = environment.API_SEVER + 'categories';
  constructor(private http: HttpClient) {
    }
  createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORIES, category)
  }
  listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.API_CATEGORIES)
  }
  detailCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_CATEGORIES + '/'  + id);
  }
  updateCategory(id: number, category: Category): Observable<Category>{
    return this.http.put<Category>(this.API_CATEGORIES +'/'+ id,category)
  }
  deleteCategory(id: number): Observable<Category>{
    return this.http.delete<Category>(this.API_CATEGORIES+ '/' + id);
  }
  pageCategory(nextPage){
    const params = nextPage;
    return this.http.get<Category>(this.API_CATEGORIES+ '/pageCategory', {params})
  }
}
