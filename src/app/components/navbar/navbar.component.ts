import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isOpenMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu():void {
    this.isOpenMenu = !this.isOpenMenu;
  }

  closeMenu():void{
    this.isOpenMenu = false;
  }



}
