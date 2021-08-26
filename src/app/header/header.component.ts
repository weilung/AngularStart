import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  highlightTitle = false;
  fontSize = 24;

  search($event : MouseEvent) {
    console.log($event.altKey);
    this.highlightTitle = !this.highlightTitle;
    ++this.fontSize;
  }

}
