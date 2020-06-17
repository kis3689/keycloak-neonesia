import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountedit',
  templateUrl: './accountedit.component.html',
  styleUrls: ['./accountedit.component.scss']
})
export class AccounteditComponent implements OnInit {

  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email])

  hide = true;
  hide2 = true;

  getErrorMessage_required(form: FormControl) {
    return form.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage_email(form: FormControl) {
    if(form.hasError('required')) {
      return 'You must enter a value'
    }
    return form.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
