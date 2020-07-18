import { Component, OnInit, Input } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../model/blog'
import {StarService} from '../../services/star.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog;

  
  records = null;
  stars = null;

  constructor(private blogService: BlogService, private starService: StarService) { }

  ngOnInit(): void {
    this.stars = this.starService.starList;
  }

  //for delete
  deleteBlog(blog: Blog){
    
    this.blogService.remove(blog);

  }

  //for calling setRating method in blogservice and setStar method in starservice
  setStar(data: any, rating: number, blog:Blog, record: any){

    const r: number = blog.rating;
    this.starService.setStar(data, rating);
    this.blogService.setRating(data, blog);
  }

}
