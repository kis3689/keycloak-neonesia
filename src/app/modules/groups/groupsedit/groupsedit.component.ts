import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeriodicUser, SAMPLE_USERS } from '../../sample-users';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';

@Component({
  selector: 'app-groupsedit',
  templateUrl: './groupsedit.component.html',
  styleUrls: ['./groupsedit.component.scss']
})
export class GroupseditComponent implements OnInit {

  displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'briefRepresentation'];
  dataSource = new MatTableDataSource<PeriodicUser>(SAMPLE_USERS);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  roleData: PeriodicRole[] = SAMPLE_ROLES;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
