import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss']
})
export class EmpresaCreateComponent implements OnInit {
  passwordShow: boolean = false;
  passwordType: string = 'password';

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

}
