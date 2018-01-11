import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user.model';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router/';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: User; 
  date: Date = new Date;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('user'));
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
