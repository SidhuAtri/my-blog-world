import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-view-all-blogs-by-category',
  templateUrl: './view-all-blogs-by-category.component.html',
  styleUrls: ['./view-all-blogs-by-category.component.css']
})
export class ViewAllBlogsByCategoryComponent implements OnInit {

  searchCategory: Category;
  blogList: Blog;
  constructor(private activatedRoute: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data.id;
    });

    this.blogsService.searchCategoryBlogs(this.searchCategory).subscribe(data => {
      this.blogList = data;
    })
  }

}
