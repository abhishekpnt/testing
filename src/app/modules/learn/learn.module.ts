import { TelemetryModule } from '../telemetry/telemetry.module';
import { LearnRoutingModule } from './learn-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CoursePageComponent } from './components';
import { CoreModule } from '../core/core.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { ContentSearchModule } from '../content-search/content-search.module';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';

import {
  SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule
} from 'ng2-semantic-ui-v12';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SlickCarouselModule,
    FormsModule,
    LearnRoutingModule,
    CoreModule,
    TelemetryModule,
    SharedFeatureModule,
    ContentSearchModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, CommonConsumptionModule,RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  declarations: [CoursePageComponent]
})
export class LearnModule { }
