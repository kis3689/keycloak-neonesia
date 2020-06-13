import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PeriodicGroup, SAMPLE_GROUPS } from '../../sample-groups';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';

@Component({
  selector: 'app-usersedit',
  templateUrl: './usersedit.component.html',
  styleUrls: ['./usersedit.component.scss']
})

export class UserseditComponent implements OnInit {


  isChecked = false;


  //tree data
  treeControl = new NestedTreeControl<PeriodicGroup>(node => node.children);
  dataSource = new MatTreeNestedDataSource<PeriodicGroup>();
  roleData: PeriodicRole[] = SAMPLE_ROLES

  hasChild = (_: number, node: PeriodicGroup) => !!node.children && node.children.length > 0;
  constructor() { 
    this.dataSource.data = SAMPLE_GROUPS;
  }

  ngOnInit(): void {
  }

}
