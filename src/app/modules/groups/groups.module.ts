import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { GroupseditComponent } from './groupsedit/groupsedit.component'
import { RouterModule } from '@angular/router';


import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    GroupslistComponent,
    GroupseditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatTreeModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    GroupslistComponent,
    GroupseditComponent
  ]
})
export class GroupsModule { }
