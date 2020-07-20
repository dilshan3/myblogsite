import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor() { }

  rating:number; 
  
  starList:Boolean[]= [true, true, true, true, true];

  setStar(data:any,  curRating : number){
      
      this.rating=data+1;                               

      for(let i=0;i<=4;i++){  

        if(i<=data){  

          this.starList[i]=false;  

        }  
        else{  

          this.starList[i]=true;  

        }  
      }
      
      if(this.rating == curRating){

        for(let i = 0; i <= 4; i++){

          this.starList[i]=true;
          
        }
      }
  }
}
