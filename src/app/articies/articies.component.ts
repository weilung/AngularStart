import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articies',
  templateUrl: './articies.component.html',
  styleUrls: ['./articies.component.css']
})
export class ArticiesComponent implements OnInit {

  @Input() list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
