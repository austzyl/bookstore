import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  items:any[];
  constructor(private router: Router,) { }

  ngOnInit() {
    this.items = [
      {
        bookname:'a',
        bookPath:'/a',
        bookType:'1',
        bookImg:'assets/a',
      },
      {
        bookname:'b',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      },
      {
        bookname:'c',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      },
      {
        bookname:'d',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      },
      {
        bookname:'a',
        bookPath:'/a',
        bookType:'1',
        bookImg:'assets/a',
      },
      {
        bookname:'b',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      },
      {
        bookname:'c',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      },
      {
        bookname:'d',
        bookPath:'/b',
        bookType:'1',
        bookImg:'assets/b',
      }
    ];
  }

  toDetail(item) {
    this.router.navigate(['/detail/detail',item.bookname]);
  }

}
