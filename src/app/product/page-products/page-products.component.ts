import { Component, OnInit } from '@angular/core';
import {Products} from '../../model/Products';
import {ProductService} from '../../serivce/product.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss']
})
export class PageProductsComponent implements OnInit {
totalElement: number =0;
products: Products[] =[];
  constructor(private productService: ProductService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pageProduct({page:0,size: 5})
  }
  pageProduct(nextPage){
    this.productService.pageProduct(nextPage).subscribe(data=>{
      console.log('data===',data);
      this.products = data['content'];
      console.log('data[content]',data['content']);
      this.totalElement = data['totalElements'];
    })
  }
  nextPage(event: PageEvent){
    const nextPage= {};
    nextPage['page'] =event.pageIndex.toString();
    nextPage['size'] = event.pageSize.toString();
    this.pageProduct(nextPage);
  }

}
