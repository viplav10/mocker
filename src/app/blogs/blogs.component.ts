import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogHtml:any;
  blogImg:any;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params=>{
      this.blogHtml=params.body;
      // this.blogHtml.replace('/','');
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
