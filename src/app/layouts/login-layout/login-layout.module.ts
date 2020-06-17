import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout.component';
import { AccountModule } from 'src/app/account/account.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountModule
  ]
})
export class LoginLayoutModule { }
