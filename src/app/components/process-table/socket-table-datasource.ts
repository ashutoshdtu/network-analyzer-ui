import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Socket, Tuple } from '../../models/socket';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import { Observable, of, from } from 'rxjs';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';

/**
 * Data source for the ProcessTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable()
export class SocketTableDataSource extends DataSource<Socket> {
  data: Socket[];

  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private http: HttpClient) {
    super();
    // this.data = this.generateSockets();
  }

  generateSockets(): Observable<Socket[]> {
    const element: Socket = {
        protocol: 'tcp',
        // local: {
        //     port: 3000,
        //     address: '127.0.0.1'
        // },
        // remote: {
        //     port: 51724,
        //     address: '127.0.0.1'
        // },
        state: 'ESTABLISHED',
        pid: 9200
    };
    return observableOf([element, element, element, element, element, element,
        element, element, element, element, element, element]);
  }

//   getSockets(): Observable<Socket[]> {
//     // const socketObservable = this.http.get('http://0.0.0.0:3000/processes')
//     //   .pipe(
//     //     map(res => {
//     //       console.log('response', res);
//     //       return <Socket[]>res;
//     //     })
//     //   );
//     // console.log('socket observable', socketObservable);
//     // return socketObservable;
//     const sockets: Socket[] = [{
//         protocol: 'tcp',
//         local: {
//             port: 3000,
//             address: '127.0.0.1'
//         },
//         remote: {
//             port: 51724,
//             address: '127.0.0.1'
//         },
//         state: 'ESTABLISHED',
//         pid: 9200
//     }];
//     return Observable(sockets);
//   }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Socket[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Socket[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Socket[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        // case 'pid': return compare(a.name, b.name, isAsc);
        case 'pid': return compare(+a.pid, +b.pid, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
