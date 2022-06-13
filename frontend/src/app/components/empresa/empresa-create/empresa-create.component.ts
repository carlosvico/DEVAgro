import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss']
})
export class EmpresaCreateComponent implements OnInit {
  passwordShow: boolean = false;
  passwordShow2: boolean = false;
  passwordType: string = 'password';
  passwordType2: string = 'password';


  constructor() { }

  ngOnInit(): void {
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  toggleRetypePassword() {
    if (this.passwordShow2) {
      this.passwordShow2 = false;
      this.passwordType2 = 'password';
    } else {
      this.passwordShow2 = true;
      this.passwordType2 = 'text';
    }
  }

}
