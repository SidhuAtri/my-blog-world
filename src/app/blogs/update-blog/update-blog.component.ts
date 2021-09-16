import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  blogId = 0;
  blogDetails: Blog;

  constructor(private activatedRoute: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.blogId = data.id;

      this.blogsService.viewBlog(this.blogId).subscribe(blogData => {
        this.blogDetails = blogData;
        console.log(this.blogDetails);
      });

    });
  }
  updateBlog(form) {
    const updatedBlog = {
      id: 11,
      categoryId: form.value.blog_category,
      title: form.value.blog_title,
      subTitle: form.value.blog_sub_title,
      blogImg: form.value.blog_img_url,
      body: form.value.blog_description
    };
    console.log(form);
    this.blogsService.updateBlog(this.blogId, updatedBlog).subscribe(data => {
      console.log(data)
    });
  }
}
