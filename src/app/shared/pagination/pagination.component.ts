import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Output() filterChanged = new EventEmitter<number>();

  @Input() totalPages: number;
  @Input() currentPage: number;

  constructor() { }

  emit(pageNumber: number){
    this.filterChanged.emit(pageNumber);
  }

  get firstPage(): number {
    return 1;
  }

  get nextPage(): number {
    return this.currentPage + 1; 
  }

  get previousPage(): number {
    return this.currentPage - 1; 
  }
}
