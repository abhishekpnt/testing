import { TelemetryModule } from '../telemetry/telemetry.module';
import { LearnRoutingModule } from './learn-routing.module';
import { NgModule } from '@angular/core';
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
    SuiRatingModule, SuiCollapseModule, CommonConsumptionModule
  ],
  providers: [],
  declarations: [CoursePageComponent]
})
export class LearnModule { }
