import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onFocus(divElement: HTMLDivElement) {
    divElement.className += ' focus';
  }

  onBlur(divElement: HTMLDivElement, inputElement: HTMLInputElement) {
    if (inputElement.value == '')
      divElement.className = divElement.className.split(' ').filter(element => element !== 'focus').join(' ');
  }

}
