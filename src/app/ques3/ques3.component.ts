import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.scss']
})
export class Ques3Component implements OnInit {

  public adinput: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adinput = this.fb.group({
     
      itemRows: this.fb.array([this.initRows()])
    })
  }
  get FormArr(){
    return this.adinput.get('itemRows') as FormArray
  }
initRows(){
  var k=0
  k=k+1
  return this.fb.group({
    phonenum:['']
  })
}

addNewArray(){
this.FormArr.push(this.initRows());
}

deleteRow(index: number){
  this.FormArr.removeAt(index);

}

submit(){
console.log('submit')
console.log(this.adinput.value.itemRows)
}
}
