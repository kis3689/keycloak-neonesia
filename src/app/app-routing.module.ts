import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './modules/users/userslist/userslist.component';
import { DefaultComponent } from './layouts/default/default.component';
import { GroupslistComponent } from './modules/groups/groupslist/groupslist.component';
import { RoleslistComponent } from './modules/roles/roleslist/roleslist.component';
import { UserseditComponent } from './modules/users/usersedit/usersedit.component';
import { GroupseditComponent } from './modules/groups/groupsedit/groupsedit.component';
import { RoleseditComponent } from './modules/roles/rolesedit/rolesedit.component';
import { AccounteditComponent } from './modules/account/accountedit/accountedit.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }, {
    path: 'users',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: UserslistComponent
      }, {
        path: 'edit',
        component: UserseditComponent
      }
    ]
  }, {
    path: 'groups',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: GroupslistComponent
      }, {
        path: 'edit',
        component: GroupseditComponent
      }
    ]
  }, {
    path: 'roles',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: RoleslistComponent
      }, {
        path: 'edit',
        component: RoleseditComponent
      }
    ]
  }, {
    path: 'account',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: AccounteditComponent
      }
    ]
  }
  
  
  
  // , {
  // path: '',
  // component: DefaultComponent,
  // children: [{
  //   path: '',
  //   component: UserslistComponent
  // }, {
  //   path: 'users',
  //   component: UserslistComponent
  // }, {
  //   path: 'users/edit',
  //   component: UserseditComponent
  // }, {
  //   path: 'groups',
  //   component: GroupslistComponent
  // }, {
  //   path: 'groups/edit',
  //   component: GroupseditComponent
  // }, {
  //   path: 'roles',
  //   component: RoleslistComponent
  // }, {
  //   path: 'roles/edit',
  //   component: RoleseditComponent
  // } ,{
  //   path: 'account/edit',
  //   component: AccounteditComponent
  // }]}, {
  //   path: 'login',
  //   component: LoginComponent
  // }, {
  //   path: 'register',
  //   component: RegisterComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
