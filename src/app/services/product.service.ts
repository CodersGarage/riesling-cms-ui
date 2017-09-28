import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../configs/api.config';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getProducts(urlParams): any {
    return this.httpClient.get(ApiConfig.getProductApi() + urlParams);
  }
}
