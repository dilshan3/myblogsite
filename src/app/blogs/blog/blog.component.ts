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

  
  records = null;
  stars = null;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.blog.starList = [true, true, true, true, true];
  
  }

  //for delete
  deleteBlog(blog: Blog){
    
    this.blogService.remove(blog);

  }

  //for setting star rating
  setRating(index: number){
    if(index > 4) {
      return;
    }

    if(this.blog.rating === index + 1){

      this.blog.rating = 0;
 
      for(let i = 0; i <= 4; i++){
  
        this.blog.starList[i]=true;
        
      }

    }
    else{

      this.blog.rating = index + 1;

      for(let i=0;i<=4;i++){  

        if(i<=index){  
  
          this.blog.starList[i]=false;  
  
        }  
        else{  
  
          this.blog.starList[i]=true;  
  
        }  
      }
    }
  }
}
