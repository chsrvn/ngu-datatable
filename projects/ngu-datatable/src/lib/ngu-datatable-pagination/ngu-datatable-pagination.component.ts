import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { IPagination } from "../model/pagination.model";
import { NguDatatablePaginationService } from "./ngu-datatable-pagination.service";

@Component({
  selector: "ngu-datatable-pagination",
  templateUrl: "./ngu-datatable-pagination.component.html",
  styleUrls: ["./ngu-datatable-pagination.component.scss"]
})
export class NguDatatablePaginationComponent implements OnInit {
  @Input() entries: number;
  @Input() currentPageSize = 10;
  @Input() currentPage = 1;
  @Output() paginationChange = new EventEmitter<void>();

  @Input() possiblePageSize: number[] = [10, 30, 50];

  selectFormControl = new FormControl(this.currentPageSize);
  private destroy$ = new Subject<void>();

  constructor(private paginationService: NguDatatablePaginationService) {}

  ngOnInit() {
    this.onChange();
    this.selectFormControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.currentPageSize = value;
        this.currentPage = 1;
        this.onChange();
      });
  }

  getFirstRowBasedOnPage(): number {
    if (this.entries) {
      return 1 + (this.currentPage - 1) * this.currentPageSize;
    }
    return 0;
  }
  getLastRowBasedOnPage(): number {
    if (this.entries) {
      if (this.currentPage * this.currentPageSize > this.entries) {
        return this.entries;
      } else {
        return this.currentPage * this.currentPageSize;
      }
    }
    return 0;
  }

  decreaseCurrentPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onChange();
    }
  }

  onChange() {
    this.paginationService.pagination.pageSize = this.currentPageSize;
    this.paginationService.pagination.currentPage = this.currentPage;
    this.paginationChange.emit();
  }

  increaseCurrentPage() {
    if (this.currentPage !== this.getMaxPages()) {
      this.currentPage++;
      this.onChange();
    }
  }

  getMaxPages(): number {
    if (this.entries && this.currentPageSize < this.entries) {
      return Math.ceil(this.entries / this.currentPageSize);
    }
    return 1;
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i < this.getMaxPages() + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  isPageVisible(page: number): boolean {
    if ((page === 4 || page === 3) && this.currentPage === 1) {
      return true;
    }
    const difference = page - this.currentPage;
    return difference < 3 && difference > -3;
  }
}
