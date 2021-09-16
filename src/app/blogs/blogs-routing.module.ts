import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewAllBlogsByCategoryComponent } from './view-all-blogs-by-category/view-all-blogs-by-category.component';
import { ViewAllBlogsByDateComponent } from './view-all-blogs-by-date/view-all-blogs-by-date.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { ViewAllBlogsComponent } from './view-all-blogs/view-all-blogs.component';
import { PageNotFoundComponent } from '../site-framework/page-not-found/page-not-found.component';
import { ContactComponent } from '../site-framework/contact/contact.component';

const routes: Routes = [
  { path: '', component: ViewAllBlogsComponent },
  { path: 'add-blog', component: AddBlogComponent },
  // { path: 'list-blogs', component: ViewAllBlogsComponent },
  { path: 'category/:id', component: ViewAllBlogsByCategoryComponent },
  { path: 'search-date', component: ViewAllBlogsByDateComponent },
  { path: 'delete-blog/:id', component: DeleteBlogComponent },
  { path: 'blog/:id', component: ViewBlogComponent },
  { path: 'update-blog/:id', component: UpdateBlogComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
