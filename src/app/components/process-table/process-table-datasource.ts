import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Socket, Tuple } from '../../models/socket';

// TODO: Replace this with your own data model type
export interface ProcessTableItem {
  protocol: string;
  state: string;
  pid: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProcessTableItem[] = [
  {pid: 1, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 2, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 3, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 4, protocol: 'udp', state: 'ESTABLISHED'},
  {pid: 5, protocol: 'udp', state: 'ESTABLISHED'},
  {pid: 6, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 7, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 8, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 9, protocol: 'udp', state: 'ESTABLISHED'},
  {pid: 10, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 11, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 12, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 13, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 14, protocol: 'udp', state: 'ESTABLISHED'},
  {pid: 15, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 16, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 17, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 18, protocol: 'tcp', state: 'ESTABLISHED'},
  {pid: 19, protocol: 'udp', state: 'ESTABLISHED'},
  {pid: 20, protocol: 'tcp', state: 'ESTABLISHED'},
];

/**
 * Data source for the ProcessTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProcessTableDataSource extends DataSource<ProcessTableItem> {
  data: ProcessTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProcessTableItem[]> {
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
  private getPagedData(data: ProcessTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProcessTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'protocol': return compare(a.protocol, b.protocol, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
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
