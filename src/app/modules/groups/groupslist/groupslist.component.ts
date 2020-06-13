import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PeriodicGroup, SAMPLE_GROUPS } from '../../sample-groups';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.scss']
})

export class GroupslistComponent implements OnInit {

  dataShow = false;

  treeControl = new NestedTreeControl<PeriodicGroup>(node => node.children);
  dataSource = new MatTreeNestedDataSource<PeriodicGroup>();

  hasChild = (_: number, node: PeriodicGroup) => !!node.children && node.children.length > 0;
  
  getData() {
    this.dataShow = !this.dataShow;
  }
  
  constructor() { 
    this.dataSource.data = SAMPLE_GROUPS;
  }



  ngOnInit(): void {
  }

}
