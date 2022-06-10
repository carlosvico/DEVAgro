import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-grao-read',
  templateUrl: './grao-read.component.html',
  styleUrls: ['./grao-read.component.scss']
})
export class GraoReadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToGrainCrete(): void {
    this.router.navigate(['/grao/create'])
    // alert("Teste")
  }

}
