import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../blogs/blogs.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category;

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getCategories().subscribe(data => {
        this.categoryList = data;
    });
  }

}
