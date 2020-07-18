import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service'
import { StarService } from '../services/star.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs=null;

  constructor(private blogService: BlogService, private starService: StarService) { }

  ngOnInit(): void {

    this.blogs = this.blogService.blogs;
  }
}
