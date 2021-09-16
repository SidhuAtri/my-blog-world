import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { ViewAllBlogsComponent } from './view-all-blogs/view-all-blogs.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { ViewAllBlogsByDateComponent } from './view-all-blogs-by-date/view-all-blogs-by-date.component';
import { ViewAllBlogsByCategoryComponent } from './view-all-blogs-by-category/view-all-blogs-by-category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogsComponent, AddBlogComponent, ViewBlogComponent, ViewAllBlogsComponent, UpdateBlogComponent, DeleteBlogComponent, ViewAllBlogsByDateComponent, ViewAllBlogsByCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
