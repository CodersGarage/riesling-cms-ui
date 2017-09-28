import {Injectable} from '@angular/core';
import {ApiConfig} from '../configs/api.config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SubscriptionService {
  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  subscriptionRequest(params): any {
    return this.httpClient.post(ApiConfig.getSubscribeApi(),
      JSON.stringify(params));
  }
}
