import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  currentBlog: Blog;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {

    //to get id of blog to display from route
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.currentBlog = this.blogService.blogs.find(blog => blog.id === id);
  
  }

}
