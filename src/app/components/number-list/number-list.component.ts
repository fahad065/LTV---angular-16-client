import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PhoneNumber {
  number: string;
  status: string;
  messages: number;
}

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent implements OnChanges {
  @Input() filterStatus: string = 'All';

  numbers: PhoneNumber[] = [];
  filteredNumbers: PhoneNumber[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchNumbers();
  }

  // ngOnChanges() {
  //   this.applyFilter();
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterStatus'] && !changes['filterStatus'].firstChange) {
      this.applyFilter(); // Apply filter whenever `filterStatus` changes
    }
  }

  fetchNumbers() {
    this.http.get<PhoneNumber[]>('http://localhost:3000/api/numbers').subscribe(
      (data) => {
        this.numbers = data;
        this.applyFilter();
      },
      (error) => {
        console.error('Error fetching phone numbers', error);
      }
    );
  }

  applyFilter() {
    this.filteredNumbers =
      this.filterStatus === 'All'
        ? this.numbers
        : this.numbers.filter((num) => num.status.toLowerCase() === this.filterStatus.toLowerCase());
  }

  toggleStatus(index: number) {
    const number = this.filteredNumbers[index];
    number.status = number.status === 'active' ? 'inactive' : 'active';
  }
}
