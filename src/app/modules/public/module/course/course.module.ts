import { CourseRoutingModule } from './course-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import {SharedFeatureModule} from '../../../shared-feature/shared-feature.module';
import { PublicCourseConsumptionPageComponent,
  ExploreCourseComponent, PublicCoursePlayerComponent, PublicBatchDetailsComponent } from './components';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule } from 'ng2-semantic-ui-v12';
import { CourseConsumptionService } from '../../../learn/services';
import {  CourseBatchService } from '../../../learn/services';
import { CourseProgressService } from '../../../learn/services';

import { FormsModule } from '@angular/forms';
import { PlayerHelperModule } from '../../../player-helper/player-helper.module';
import { ContentSearchModule } from '../../../content-search/content-search.module';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';

@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    CourseRoutingModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule,
    FormsModule,
    PlayerHelperModule,
    ContentSearchModule,
    CommonConsumptionModule
  ],
  providers: [CourseConsumptionService, CourseBatchService, CourseProgressService],
  declarations: [ PublicCourseConsumptionPageComponent, ExploreCourseComponent,
    PublicCoursePlayerComponent, PublicBatchDetailsComponent ]
})
export class CourseModule { }
