import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedStatus: string = 'active'; // Default filter active value

  onFilterChanged(status: string) {
    this.selectedStatus = status; // Update the selected filter status
  }
}
