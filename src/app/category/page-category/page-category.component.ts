import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';
import {CategoryService} from '../../serivce/category.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogCategoryComponent} from '../dialog-category/dialog-category.component';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
totalElement: number = 0;
categories: Category[] = [];
searchText;
  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pageCategory({page:0,size: 3})
  }
  pageCategory(nextPage){
    this.categoryService.pageCategory(nextPage).subscribe(data =>{
      console.log('data =========' , data);
      this.categories = data['content']
      console.log('data[content]',data['content']);
      this.totalElement = data['totalElements'];
      console.log("co gi trong nay", this.totalElement);
    })
  }
  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const nextPage = {};
    nextPage['page'] = event.pageIndex.toString();
    nextPage['size'] = event.pageSize.toString();
    console.log('request[size]', nextPage['size']);
    this.pageCategory(nextPage);
  }
  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() =>{
      // window.location.reload();
      this.pageCategory({page:0, size: this.totalElement})
    })
  }
  openDialog(id:number) {
    const dialogRef = this.dialog.open(DialogCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteCategory(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
