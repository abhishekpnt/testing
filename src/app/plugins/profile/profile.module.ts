import { SharedFeatureModule } from '../../modules/shared-feature/shared-feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfileRoutingModule } from './profile-routing.module';
import {
  ProfilePageComponent, ProfileBadgeComponent, UpdateContactDetailsComponent,
  AccountRecoveryInfoComponent, CreateUserComponent, ChooseUserComponent, SubmitTeacherDetailsComponent
} from './components';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule } from 'ng2-semantic-ui-v12';
import { CoreModule } from '../../modules/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { WebExtensionModule } from 'web-extensions-v12';
import { TelemetryModule } from '../../modules/telemetry/telemetry.module';
import { AvatarModule } from 'ngx-avatar';
import { ContentSearchModule } from '../../modules/content-search/content-search.module';
import {CommonConsumptionModule} from '@project-sunbird/common-consumption';
import { CertificateDirectivesModule } from 'sb-svg2pdf';
import { CsModule } from '@project-sunbird/client-services';
import { CsLibInitializerService } from '../../service/CsLibInitializer/cs-lib-initializer.service';
import { CommonFormElementsModule } from '@project-sunbird/common-form-elements';
import {LocationModule} from '../location';
import { MatTooltipModule } from '@angular/material/tooltip';


export const csCourseServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.courseService;
};

export const csCertificateServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.certificateService;
};

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
    SuiProgressModule, SuiRatingModule, SuiCollapseModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    // WebExtensionModule,
    TelemetryModule,
    SlickCarouselModule,
    AvatarModule,
    SharedFeatureModule,
    ContentSearchModule,
    CommonConsumptionModule,
    CertificateDirectivesModule,
    CommonFormElementsModule,
    LocationModule,
    MatTooltipModule
  ],
  declarations: [ProfilePageComponent, ProfileBadgeComponent, UpdateContactDetailsComponent,
   AccountRecoveryInfoComponent,
   CreateUserComponent,
   ChooseUserComponent,
   SubmitTeacherDetailsComponent],
  providers: [
    {provide: 'CS_COURSE_SERVICE', useFactory: csCourseServiceFactory, deps: [CsLibInitializerService]},
    {provide: 'CS_CERTIFICATE_SERVICE', useFactory: csCertificateServiceFactory, deps: [CsLibInitializerService]}
  ]
})
export class ProfileModule { }
