import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();
  @Input() input: string;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: new FormControl(this.input),
    });
  }

  emitChanges() {
    if(this.searchForm.controls.query.value && this.searchForm.controls.query.value.length > 0){
      this.filterChanged.emit(this.searchForm.controls.query.value);
    } else {
      this.filterChanged.emit(null);
    }
  }

  get query(): any {
    return this.searchForm.get('query');
  }
}
