import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../serivce/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  categories: Category;
  status = 'Form edit category!';
  error1: any = {
    message: 'The name product invalid'
  };
  error2: any = {
    message: 'The name product exited'
  };
  success: any = {
    message: 'Update success !'
  };
  constructor(private atRouter: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(ctgId=>{
      const id = +ctgId.get('id');
      console.log('id=>>>>',id);
      this.categoryService.detailCategory(id).subscribe(ctgId =>{
        this.categories =ctgId;
        console.log('co gi o day khong vay',this.categories);
      })
    })
  }
  changeAvatar($event: string) {
    this.categories.avatar = $event;
  }
  ngSubmit() {
    this.categoryService.updateCategory(this.categories.id, this.categories).subscribe(data => {
      console.log('data trong nay =>>>',data);
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'The name product invalid';
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'The name category is existed! Please try again!';
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Update success !';
      }
    });
  }



}
