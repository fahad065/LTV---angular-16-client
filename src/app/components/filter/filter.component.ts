import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  statusOptions = ['active', 'inactive']; // Dropdown options
  selectedStatus: string = 'active'; // Default selected option

  onStatusChange() {
    this.filterChanged.emit(this.selectedStatus); // Emit the selected status
  }
}
