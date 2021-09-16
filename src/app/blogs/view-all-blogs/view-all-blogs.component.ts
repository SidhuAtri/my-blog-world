import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-view-all-blogs',
  templateUrl: './view-all-blogs.component.html',
  styleUrls: ['./view-all-blogs.component.css']
})
export class ViewAllBlogsComponent implements OnInit {

  blogList: Blog;
  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getAllBlogs().subscribe(data => {
      this.blogList = data;
    });
  }

}
