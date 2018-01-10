import { Component } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {

  userName = JSON.parse(localStorage.getItem('user'));


}
