import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';
import { FormControl, Validators } from '@angular/forms';

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

  @ViewChild('searchInput') searchInput:ElementRef;
  applyFilter() {
    const filterValue = this.searchInput.nativeElement.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData() {
    this.dataTableShow = !this.dataTableShow;
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}