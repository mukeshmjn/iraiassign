import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor() { }
@Input('parentData') public name;

  ngOnInit(): void {
  }

}
