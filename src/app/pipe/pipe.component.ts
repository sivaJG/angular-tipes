import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }


data:any = [{name:'siva',age:24,gender:'male'},{name:'siva',age:24,gender:'male'},]


  ngOnInit(): void {
  }

  
  mobilelist:any=[
    {id:189234789, name:'Realme 13', price:10000},
    {id:236372367,name:'Realme 8', price:20000 }
  ];

  mobildetailes={
    id:189234789, name:'Realme 13', price:10000
  }

}
