import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  allProducts: number;
  @Input()
  inStockProducts: number;
  @Input()
  outOfStockProducts: number;
  @Output()
  selectedFilterRadioButtonEvent: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  emitFilterRadioButtonValue() {
    this.selectedFilterRadioButtonEvent.emit(this.selectedFilterRadioButton);
  }
}
