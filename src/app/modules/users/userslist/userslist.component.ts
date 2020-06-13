import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeriodicUser, SAMPLE_USERS } from '../../sample-users';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'lastName', 'firstName', 'briefRepresentation'];
  dataSource = new MatTableDataSource<PeriodicUser>(SAMPLE_USERS);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('searchInput') searchInput:ElementRef;

  dataShow = false;

  getData() {
    this.dataShow = !this.dataShow;
  }

  userDelete(event: any) {
    confirm('Are you sure want to permanently delete the user (id : '+event+')?');
    
  }

  applyFilter() {
    const filterValue = this.searchInput.nativeElement.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

}
