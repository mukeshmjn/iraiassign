import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  constructor() { }
  @Input('parentData') public name;
  ngOnInit(): void {
  }

}
