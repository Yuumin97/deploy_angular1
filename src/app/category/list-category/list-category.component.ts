import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../serivce/category.service';
import {Category} from '../../model/Category';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DialogCategoryComponent} from '../dialog-category/dialog-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameCategory', 'avatarCategory','edit','delete'];
  dataSource: any;
  categories: Category[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListCategory();
  }
  getListCategory(){
    console.log('goi list');
    this.categoryService.listCategory().subscribe(listCTG=>{
      this.categories = listCTG;
      console.log('listCategory',listCTG);
      this.dataSource = new MatTableDataSource<Category>(this.categories);
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteCategory(id: number){
    this.categoryService.deleteCategory(id).subscribe(()=>{
      this.getListCategory();
    })
  }
  openDialog(id: number){
    const dialogRef = this.dialog.open(DialogCategoryComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if (result){
        this.deleteCategory(id);
      }
      console.log(`dialog result : ${result}`);
    })

  }
}
