import { Injectable } from '@angular/core';
import { LearnerService } from '../../../../../core';
import { ConfigService } from '../../../../../shared';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private learnerService: LearnerService, private config: ConfigService) { }

  public getFaqJSON() {
    const systemSetting = {
      url: this.config.urlConFig.URLS.SYSTEM_SETTING.FAQ_URL,
    };
    return this.learnerService.get(systemSetting);
  }
}
