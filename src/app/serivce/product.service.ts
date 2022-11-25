import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Products} from '../model/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRODUCT = environment.API_SEVER + 'products';
  constructor(private http: HttpClient) {
  }
  pageProduct(nextPage){
    const params = nextPage;
    return this.http.get<Products>(this.API_PRODUCT, {params})
  }
}
