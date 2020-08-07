import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm = new FormGroup({

    id: new FormControl(),
    title: new FormControl('', Validators.required),
    date: new FormControl(),
    imgUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  
  })

  public editId: number = null;
  public desc: String = null;
  public titleOld: String = null;
  public url: String = null;

  constructor(public blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.editId= +this.activatedRoute.snapshot.paramMap.get('id');
   
    if(this.editId > 0){

      let blog: Blog = this.blogService.blogs.find(b => b.id === this.editId);

      this.desc = blog.description;
      this.url = blog.imgUrl;
      this.titleOld = blog.title; 
      
      this.blogForm.controls.description.setValue(this.desc);
      this.blogForm.controls.imgUrl.setValue(this.url);
      this.blogForm.controls.title.setValue(this.titleOld); 
    }

  }

  onFormSubmit(){
    
    if(this.blogForm.valid && this.editId === 0){

      this.blogForm.controls.id.setValue(this.getId() + 1);
      this.blogForm.controls.date.setValue(new Date);
      this.blogService.addBlog(this.blogForm.value);
      this.router.navigate(['']);

    }
    else{

      this.blogForm.controls.id.setValue(this.editId);
      this.blogForm.controls.date.setValue(new Date);
      this.blogService.editBlog(this.blogForm.value, this.editId);
      this.router.navigate(['']);
    }

  }

  //for setting id for new blogs
  getId(){

    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id;}));

  }

  //for previewing image
  get imgUrl(){

    return this.blogForm.value.imgUrl;

  }
}
