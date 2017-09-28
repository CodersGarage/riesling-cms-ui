import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: 'product.component.html',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  private productService;
  pageLimit;
  currentPage;
  totalPages;
  pages;
  hasNext;
  hasPrev;
  products;

  constructor(productService: ProductService) {
    this.productService = productService;

    this.pageLimit = 9;
    this.currentPage = 0;
    this.totalPages = [];
    this.pages = 1;
    this.hasNext = false;
    this.hasPrev = false;
    this.products = [];
  }

  ngOnInit() {
    this.getProductList();
  }

  onFirstClick() {
    this.currentPage = 0;
    this.getProductList();
  }

  onLastClick() {
    this.currentPage = this.pages - 1;
    this.getProductList();
  }

  onPrevClick() {
    if (this.hasPrev) {
      this.currentPage--;
      this.getProductList();
    }
  }

  onNextClick() {
    if (this.hasNext) {
      this.currentPage++;
      this.getProductList();
    }
  }

  onIndexClick(index) {
    this.currentPage = index;
    this.getProductList();
  }

  private getProductList() {
    console.log(this.currentPage);

    this.productService.getProducts('?page=' + this.currentPage + '&limit=' + this.pageLimit).subscribe(
      data => {
        this.products = data.data;
        this.hasNext = data.has_next;
        this.hasPrev = data.has_prev;
        this.currentPage = data.page;
        this.pages = data.total_page;
        this.totalPages = new Array(data.total_page);
        console.log(data);
      }
    );
  }
}
