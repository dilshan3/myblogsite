import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public blogs: Blog[] = [
    // {
    //   id: 1,
    //   title: 'Get start with Angular',
    //   date: new Date(),
    //   imgUrl:
    //     'https://www.closette.it/wp-content/uploads/2018/05/IMG_8353ls.jpg',
    //   desc:
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 
    //   rating: 0   
    // },
    // {
    //   id: 2,
    //   title: 'Serverless API with Node.js',
    //   date: new Date(),
    //   imgUrl:
    //     'https://raccontodigitale.it/wp-content/uploads/2017/12/Come-fare-foto-dallalto-per-Instagram-1024x668.jpg',
    //   desc:
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    //   rating: 0
    //   },
    // {
    //   id: 3,
    //   title: 'AWS for beginners',
    //   date: new Date(),
    //   imgUrl:
    //     'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
    //   desc:
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    //   rating: 0
    // },
  ];

  constructor(private http: HttpClient) {

    this.getBlogs();

  }

  //for delete
  remove(blog: Blog){
   
    const index: number= this.blogs.indexOf(blog);
    this.blogs.splice(index,1);
  
  }

  //for adding blogs
  addBlog(blog:Blog){

    this.blogs.push(blog);

  }

  //for editing blogs
  editBlog(blog:Blog, id: number){

    const index = this.blogs.findIndex((b => b.id === id));
    let newBlog : Blog = this.blogs[index];
    
    newBlog.id = id;
    newBlog.date = blog.date;
    newBlog.description = blog.description;
    newBlog.title = blog.title;
    newBlog.imgUrl = blog.imgUrl;
    newBlog.rating = this.blogs[index].rating;
    
    this.blogs[index]= newBlog;
  }
  
  //for getting blog data from mock api
  getBlogs() {
   
    this.http.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').
    pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
    
      this.blogs=val;

    });

  }

  //to handle error
  private handleError(error: Response | any) {
  
    return null;
  
  }
}
