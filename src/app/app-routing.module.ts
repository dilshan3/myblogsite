import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBlogComponent} from './create-blog/create-blog.component';
import {BlogsComponent} from './blogs/blogs.component';
import {ViewBlogComponent} from './view-blog/view-blog.component';


const routes: Routes = [{path: 'create-blog', component: CreateBlogComponent},
 {path: '', component: BlogsComponent},
 {path: 'view-blog/:id', component: ViewBlogComponent},
 {path: 'create-blog/:id', component: CreateBlogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
