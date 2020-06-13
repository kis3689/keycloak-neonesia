import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicUser, SAMPLE_USERS } from '../../sample-users';

@Component({
  selector: 'app-rolesedit',
  templateUrl: './rolesedit.component.html',
  styleUrls: ['./rolesedit.component.scss']
})
export class RoleseditComponent implements OnInit {


  displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'briefRepresentation'];
  dataSource = new MatTableDataSource<PeriodicUser>(SAMPLE_USERS);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
