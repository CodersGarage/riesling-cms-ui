export class ApiConfig {

  private static getBaseUrl(): string {
    return 'http://localhost:9000';
  }

  static getProductApi(): string {
    return this.getBaseUrl() + '/api/v1/product/list';
  }
}
