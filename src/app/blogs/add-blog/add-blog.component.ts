import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {}

  addNewBlog(form) {
    console.log(form.value);

    let addNewBlog = {
      id: 11,
      categoryId: form.value.blog_category,
      title: form.value.blog_title,
      subTitle: form.value.blog_sub_title,
      blogImg: form.value.blog_img_url,
      body: form.value.blog_description,
    };

    console.log(addNewBlog);

    this.blogsService.addBlog(addNewBlog).subscribe((data) => {
      console.log(data);
    });
  }
}
