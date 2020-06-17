import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  userid: string = '';
  userpass: string = '';

  loginId = new FormControl('', [Validators.required]);
  loginPass = new FormControl('', [Validators.required]);

  getErrorMessage_required(form: FormControl) {
    return form.hasError('required') ? 'You must enter a value' : '';
  }

  simpleLogin() {
    if(this.userid == 'admin' && this.userpass == 'admin') {
      this.router.navigate(["users"]);
    } else {
      alert('check your id or password')
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
