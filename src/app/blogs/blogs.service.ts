import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import {Category} from '../site-framework/category';



@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  getAllBlogs(): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs';
    return this.httpClient.get<Blog>(blogUrl);
  }

  addBlog(blogBody): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs';
    return this.httpClient.post<Blog>(blogUrl, blogBody);
  }

  viewBlog(blogId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/' + blogId;
    return this.httpClient.get<Blog>(blogUrl);
  }

  updateBlog(blogId, blogBody): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/' + blogId;
    return this.httpClient.put<Blog>(blogUrl, blogBody);
  }

  deleteBlog(blogId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/' + blogId;
    return this.httpClient.delete<Blog>(blogUrl);
  }

  searchCategoryBlogs(categoryId): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs?categoryId=' + categoryId;
    return this.httpClient.get<Blog>(blogUrl);
  }

  searchDateBlogs(dateParam): Observable<Blog> {
    const blogUrl = 'http://localhost:3000/blogs/date=' + dateParam;
    return this.httpClient.get<Blog>(blogUrl);
  }
}
