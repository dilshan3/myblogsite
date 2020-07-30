import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // blogs=null;

  constructor(public blogService: BlogService, private router: Router) { }

  ngOnInit(): void {

    // this.blogs = this.blogService.blogs;

  }

  onClickBlog(id: number){

    this.router.navigate(['/view-blog', id]);

  }

  onClickCreate(){

    this.router.navigate(['/create-blog']);

  }
}
