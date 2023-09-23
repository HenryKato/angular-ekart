import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  @Output()
  searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputElement: ElementRef;
  getSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextEvent.emit(this.searchText);
  }

  // getSearchText2(searchInput: string) {
  //   this.searchText = searchInput
  //   this.searchTextEvent.emit(this.searchText);
  // }

  // getSearchText1(event: any) {
  //   this.searchText = event.target.value;
  // }
  // onSearchTextChanged() {
  //   this.searchTextEvent.emit(this.searchText);
  // }
}
