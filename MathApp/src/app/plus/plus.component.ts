import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

  num1: number = Math.floor(Math.random() * 100);
  num2: number = Math.floor(Math.random() * 100);

  rightAnswer = false;
  message: string;
  notNumber = false;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }
  check(input: HTMLInputElement) {
    if (typeof (input.value) === 'string') {
      this.rightAnswer = true;
    } else {
      setTimeout(() => {
        this.num1 = Math.floor(Math.random() * 100);
        this.num2 = Math.floor(Math.random() * 100);
        this.color = '';
        this.message = '';

      }, 1500);
      this.notNumber = true;
      this.color = 'warning';
      this.message = 'برجاء إدخال ارقام فقط';
    }
    // tslint:disable-next-line:radix
    if (parseInt(input.value) === this.num1 + this.num2) {
      setTimeout(() => {
        this.num1 = Math.floor(Math.random() * 100);
        this.num2 = Math.floor(Math.random() * 100);
        this.color = '';
        this.message = '';

      }, 1500);
      this.rightAnswer = true;
      this.color = 'success';
      this.message = 'إجابتك صحيحة';
    }
    else {
      this.rightAnswer = false;
      this.color = 'danger';
      this.message = 'إجابتك خاطئة';
      setTimeout(() => {
        this.color = '';
        this.message = '';

      }, 1500);
    }
  }

  changeNumber(){
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
  }
}
