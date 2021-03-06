import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  content: string;


  constructor() { }

  ngOnInit() {

  }

}
