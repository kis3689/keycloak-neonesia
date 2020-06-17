import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicUser, SAMPLE_USERS } from '../../sample-users';
import { FormControl, Validators } from '@angular/forms';

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

  roleName = new FormControl('', [Validators.required]);

  getErrorMessage_required(form: FormControl) {
    return form.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
