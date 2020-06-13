import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';

@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.scss']
})
export class RoleslistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'id'];
  dataSource = new MatTableDataSource<PeriodicRole>(SAMPLE_ROLES);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  roleData: PeriodicRole[] = SAMPLE_ROLES;
  
  dataTableShow = false;

  getData() {
    this.dataTableShow = !this.dataTableShow;
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}