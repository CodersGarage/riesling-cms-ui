import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  templateUrl: 'product.details.component.html',
  selector: 'app-product-detail',
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  private productService;
  route;
  productId;
  product;

  constructor(productService: ProductService, route: ActivatedRoute) {
    this.productService = productService;
    this.route = route;
    this.initDummyProduct();
  }

  initDummyProduct() {
    this.product = {
      product_name: '',
      product_code: '',
      product_description: '',
      product_price: 0.0,
      product_download_link: '',
      product_category: '',
      product_discount: 0,
      product_created_on: '',
      product_updated_on: '',
      product_total_downloads: 0
    };
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe(
      data => {
        if (data.code === 200) {
          this.product = data.data;
        } else {

        }
      }
    );
  }
}
