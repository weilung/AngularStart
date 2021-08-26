import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() keywordChuang = new EventEmitter<string>();
  keyword = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  highlightTitle = false;
  fontSize = 24;

  search($event : MouseEvent) {
    //console.log($event);
    // this.highlightTitle = !this.highlightTitle;
    // ++this.fontSize;
    this.keywordChuang.emit(this.keyword);
  }

}
