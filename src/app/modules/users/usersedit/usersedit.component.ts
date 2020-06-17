import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PeriodicGroup, SAMPLE_GROUPS } from '../../sample-groups';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersedit',
  templateUrl: './usersedit.component.html',
  styleUrls: ['./usersedit.component.scss']
})

export class UserseditComponent implements OnInit {
  userName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email])

  

  isChecked = false;
  hide = true;
  hide2 = true;


  //tree data
  treeControl = new NestedTreeControl<PeriodicGroup>(node => node.children);
  dataSource = new MatTreeNestedDataSource<PeriodicGroup>();
  roleData: PeriodicRole[] = SAMPLE_ROLES

  hasChild = (_: number, node: PeriodicGroup) => !!node.children && node.children.length > 0;


  getErrorMessage_required(form: FormControl) {
    return form.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage_email(form: FormControl) {
    if(form.hasError('required')) {
      return 'You must enter a value'
    }
    return form.hasError('email') ? 'Not a valid email' : '';
  }


  constructor() { 
    this.dataSource.data = SAMPLE_GROUPS;
  }

  ngOnInit(): void {
  }

}
