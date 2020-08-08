import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  id: any;
  array: Blog[];

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService,
     private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    //to get id of blog to display from route

    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    //this.array = this.blogService.blogs;

    this.http.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').
    pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
    
      this.array = val;

    });
  
  }

  getBlog():Blog{

    if(this.array.length === 0)
      return null;
      
    else
      return this.array.find(blog => blog.id === this.id);
      
  }  

  private handleError(error: Response | any) {
  
    return null;
  
  }

  onClickEdit(){

    this.router.navigate(['/create-blog', this.id]);

  }
}
