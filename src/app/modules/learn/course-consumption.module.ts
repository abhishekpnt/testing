import { TelemetryModule } from '../telemetry/telemetry.module';
import { CourseConsumptionRoutingModule } from './course-consumption-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { FormsModule } from '@angular/forms';
import {
  CoursePlayerComponent, CourseConsumptionHeaderComponent, CourseConsumptionPageComponent,
  CurriculumCardComponent  } from './components';
import { CoreModule } from '../core/core.module';
import { PlayerHelperModule } from '../player-helper/player-helper.module';
import {
  SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule
} from 'ng2-semantic-ui-v12';
import { BatchDetailsComponent,  } from './components/batch/batch-details/batch-details.component';
import { UnEnrollBatchComponent} from './components/batch/unenroll-batch/unenroll-batch.component';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { AssessmentPlayerComponent } from './components/course-consumption/assessment-player/assessment-player.component';
import { CourseCompletionComponent } from './components/course-consumption/course-completion/course-completion.component';
import { CertificateNameUpdatePopupComponent } from './components/course-consumption/certificate-name-update-popup/certificate-name-update-popup.component';
import { CourseDetailsComponent } from './components/course-consumption/course-details/course-details.component';
import { CsModule } from '@project-sunbird/client-services';
import { CsLibInitializerService } from '../../services/CsLibInitializer/cs-lib-initializer.service';
// import { NotificationModule } from '../notification/notification.module';
import { DiscussionModule } from '../discussion/discussion.module';
import { PendingchangesGuard } from '../public/services/pending-changes-guard/pendingchanges.guard';
import { GroupsModule } from '../groups';

export const csUserServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.userService;
};
export const csCourseServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.courseService;
};
export const csNotificationServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.notificationService;
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
    SuiProgressModule, SuiRatingModule, SuiCollapseModule,
    FormsModule,
    CourseConsumptionRoutingModule,
    CoreModule,
    TelemetryModule,
    PlayerHelperModule,
    CommonConsumptionModule,
    // NotificationModule,
    DiscussionModule,
    GroupsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: 'CS_USER_SERVICE', useFactory: csUserServiceFactory, deps: [CsLibInitializerService] },
    { provide: 'CS_COURSE_SERVICE', useFactory: csCourseServiceFactory, deps: [CsLibInitializerService] },
    { provide: 'CS_NOTIFICATION_SERVICE', useFactory: csNotificationServiceFactory, deps: [CsLibInitializerService] },
    PendingchangesGuard
  ],
  declarations: [CoursePlayerComponent, CourseConsumptionHeaderComponent, AssessmentPlayerComponent,
    CourseConsumptionPageComponent, BatchDetailsComponent, CurriculumCardComponent, UnEnrollBatchComponent,
    AssessmentPlayerComponent, CourseCompletionComponent, CourseDetailsComponent, CertificateNameUpdatePopupComponent],
})
export class CourseConsumptionModule { }
