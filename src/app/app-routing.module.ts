import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './modules/users/userslist/userslist.component';
import { DefaultComponent } from './layouts/default/default.component';
import { GroupslistComponent } from './modules/groups/groupslist/groupslist.component';
import { RoleslistComponent } from './modules/roles/roleslist/roleslist.component';
import { UserseditComponent } from './modules/users/usersedit/usersedit.component';
import { GroupseditComponent } from './modules/groups/groupsedit/groupsedit.component';
import { RoleseditComponent } from './modules/roles/rolesedit/rolesedit.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: UserslistComponent
  }, {
    path: 'users',
    component: UserslistComponent
  }, {
    path:'users/edit',
    component: UserseditComponent
  }, {
    path: 'groups',
    component: GroupslistComponent
  }, {
    path: 'groups/edit',
    component: GroupseditComponent
  }, {
    path: 'roles',
    component: RoleslistComponent
  }, {
    path: 'roles/edit',
    component: RoleseditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
