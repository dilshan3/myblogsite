import { Component, OnInit, Input } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../model/blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog;
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  //for delete
  deleteBlog(blog: Blog){
    
    this.blogService.remove(blog);

  }

}
