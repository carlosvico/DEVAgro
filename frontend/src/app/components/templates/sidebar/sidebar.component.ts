import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  responsive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  callSideNav(): void {
    if(this.responsive === true){
      this.responsive = false;
    }else{
      this.responsive = true;
    }
  }

}
