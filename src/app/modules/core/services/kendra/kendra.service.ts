import { ConfigService } from '../../../shared';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service to provides CRUD methods to make Observation api request by extending DataService.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class KendraService extends DataService {
/**
   * base Url for Kendra api
   */
 baseUrl: string;
 /**
  * reference of config service.
  */
 public config: ConfigService;
 /**
  * reference of Kendra service.
  */
 public http: HttpClient;
 /**
  * constructor
  * @param {ConfigService} config ConfigService reference
  * @param {HttpClient} http HttpClient reference
  */
 constructor(config: ConfigService, http: HttpClient) {
   super(http);
   this.config = config;
   this.baseUrl = this.config.urlConFig.URLS.KENDRA_PREFIX;
 }
}
