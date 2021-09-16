import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  blogId = 0;

  constructor(private activatedRoute: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.blogId = data.id;

      this.blogsService.deleteBlog(this.blogId).subscribe(deleteddata=>{
        console.log("Blog has been Deleted") 
      })
    });
  }
}
