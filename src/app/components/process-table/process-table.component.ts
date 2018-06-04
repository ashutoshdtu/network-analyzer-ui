import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProcessTableDataSource } from './process-table-datasource';
import { SocketTableDataSource } from './socket-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss']
})
export class ProcessTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProcessTableDataSource;
  // socketDataSource: SocketTableDataSource;
  http: HttpClient;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];
  displayedColumns = ['pid', 'state', 'protocol'];

  ngOnInit() {
    this.dataSource = new ProcessTableDataSource(this.paginator, this.sort);
    // this.socketDataSource = new SocketTableDataSource(this.paginator, this.sort, this.http);
  }
}
