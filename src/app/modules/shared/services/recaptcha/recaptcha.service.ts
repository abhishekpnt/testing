import {Injectable} from '@angular/core';
import {HttpOptions} from '../../../shared';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config/config.service';


@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(public http: HttpClient, public config: ConfigService) {
    this.http = http;
  }

  /**
   * Validates recaptcha token
   * @param recaptchaToken : string token generated by resolving recaptcha
   */
  validateRecaptcha(recaptchaToken: string) {
    const options: HttpOptions = {headers: {'Content-Type': 'application/json'}};
    return this.http.post(this.config.urlConFig.URLS.RECAPTCHA.VALIDATE + '?captchaResponse=' + recaptchaToken, options);
  }
}