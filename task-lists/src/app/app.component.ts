import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-lists';
  inputs = document.querySelectorAll('.input');

  constructor() {
    function focusFunc(): void {
      let parent = this.parentNode.parentNode;
      parent.classList.add('focus');
    };

    function blurFunc(): void {
        let parent = this.parentNode.parentNode;
        if(this.value == "") {
        parent.classList.remove('focus');
      }
    }

    this.inputs.forEach(input => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });
  }
}
