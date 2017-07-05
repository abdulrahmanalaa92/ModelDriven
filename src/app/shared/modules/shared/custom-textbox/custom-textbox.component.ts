import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'textbox',
  templateUrl: './custom-textbox.component.html',
})
export class CustomTextboxComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  @Input()
  myForm: FormControl;

  @Input()
  label: string;

  @Input()
  controlName: string;

  @Input()
  errorMessage: string;


  @Input()
  isPassword: boolean;

  textboxChanged(control) {
    let updated = this.myForm.value;
    updated[this.controlName] = control.target.value  ;
    this.myForm.setValue(updated);
    // console.log(control.target.value);
  }
}
