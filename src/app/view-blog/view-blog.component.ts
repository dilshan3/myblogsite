import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  id: any;
  array: Blog[];
  blog: Blog;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private http: HttpClient) { }

  ngOnInit(): void {

    //to get id of blog to display from route

    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   
    // this.currentBlog = this.blogService.blogs.find(blog => blog.id === this.id);

    this.array = null;

    this.http.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').
    pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
    
      this.array = val;

    });
  
  }

  getBlog():Blog{

    return this.array.find(blog => blog.id === this.id);
  }

  private handleError(error: Response | any) {
  
    return null;
  
  }
}
