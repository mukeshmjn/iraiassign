import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements OnInit {

  constructor() { }
  @Input('parentData') public name;
  ngOnInit(): void {
  }

}
