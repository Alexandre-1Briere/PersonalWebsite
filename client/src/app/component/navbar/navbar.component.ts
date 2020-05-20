import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../interface/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  itemList: MenuItem[];
  constructor() {
    this.itemList = [];
  }

  ngOnInit() {
  }

}
