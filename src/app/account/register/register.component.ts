import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hide2 = true;
  email = new FormControl('', [Validators.required, Validators.email])

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
