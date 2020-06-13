import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserseditComponent } from './usersedit/usersedit.component';
import { UserslistComponent } from './userslist/userslist.component';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTreeModule } from '@angular/material/tree'
import { MatListModule } from '@angular/material/list'
import { MatCheckboxModule } from '@angular/material/checkbox'


@NgModule({
  declarations: [
    UserseditComponent,
    UserslistComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    UserseditComponent,
    UserslistComponent
  ]
})
export class UsersModule { }
