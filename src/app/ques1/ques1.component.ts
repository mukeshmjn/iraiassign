import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.scss']
})
export class Ques1Component implements OnInit {
  series :any= [2,3,10,15,26,35,50,63,82]
  
  constructor() { }
  num : any;
  result: any
  ngOnInit(): void {
    console.log(this.series)
  }
search(){
 
 this.result  = this.series[this.num]
}
}
