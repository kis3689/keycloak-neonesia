import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeriodicUser, SAMPLE_USERS } from '../../sample-users';
import { PeriodicRole, SAMPLE_ROLES } from '../../sample-roles';
import { FormControl, Validators } from '@angular/forms';

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

  groupName = new FormControl('', [Validators.required]);

  getErrorMessage_required(form: FormControl) {
    return form.hasError('required') ? 'You must enter a value' : '';
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
