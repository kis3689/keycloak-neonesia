import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { MatSidenavModule } from '@angular/material/sidenav';


import { UsersModule } from 'src/app/modules/users/users.module';
import { GroupsModule } from 'src/app/modules/groups/groups.module';
import { RolesModule } from 'src/app/modules/roles/roles.module';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    UsersModule,
    GroupsModule,
    RolesModule

  ]
})
export class DefaultModule { }
