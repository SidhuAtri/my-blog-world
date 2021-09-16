import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  blogId = 0;
  blogDetails: Blog;

  constructor(private activatedRoute: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.blogId = data.id;
    });

    this.blogsService.viewBlog(this.blogId).subscribe(blogData => {
      this.blogDetails = blogData;
    });
  }
}
