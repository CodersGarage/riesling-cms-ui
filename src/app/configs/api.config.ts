export class ApiConfig {

  private static getBaseUrl(): string {
    return 'http://localhost:9000';
  }

  static getProductListApi(): string {
    return this.getBaseUrl() + '/api/v1/product/list';
  }

  static getProductApi(productId): string {
    return 'http://localhost:9000/api/v1/product/' + productId;
  }

  static getSubscribeApi(): string {
    return this.getBaseUrl() + '/api/v1/subscription/create';
  }
}
