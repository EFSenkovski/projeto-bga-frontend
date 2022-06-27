import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller = false;
  constructor(
    private router: Router,
    private http: HttpClient
  ){}

  ngOnInit(): void {
  }

  logout(){
    this.http.delete('http://localhost:8080/tokens/revoke')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('iduser')
    this.router.navigate(['/login'])
  }

}
