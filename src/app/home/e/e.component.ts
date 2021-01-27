import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EComponent implements OnInit {
public inptext:string="abc"
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    console.log('search')
    console.log(this.inptext)
  }
}
