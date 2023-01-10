import { TelemetryModule } from '../telemetry';
import { GroupsRoutingModule } from './groups-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyGroupsComponent, AddMemberComponent, GroupHeaderComponent, NoGroupResultComponent,
  AddActivityComponent, MemberActionsComponent, GroupMembersComponent, FtuPopupComponent,
  BackButtonComponent, ActivityListComponent, ActivityDashboardComponent, ActivitySearchComponent,
  GroupDetailsComponent, ActivityFormComponent, CreateEditGroupComponent, AddActivityContentTypesComponent,
  PopupComponent } from './components';
import { CoreModule } from '../core/core.module';
import { SharedFeatureModule } from '../shared-feature';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { CsLibInitializerService } from '../../services/CsLibInitializer/cs-lib-initializer.service';
import { ContentSearchModule } from '../content-search';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RecaptchaModule } from 'ng-recaptcha';
import { DiscussionModule } from '../discussion/discussion.module';
import { ActivityDetailsComponent } from './components/activity/activity-details/activity-details.component';
import { ActivityDashboardDirective } from './directive/activity-dashboard/activity-dashbord.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    TelemetryModule,
    NgInviewModule,
    SharedFeatureModule,
    GroupsRoutingModule,
    CommonConsumptionModule,
    ContentSearchModule,
    SlickCarouselModule,
    RecaptchaModule,
    DiscussionModule,
    SharedFeatureModule
  ],
  declarations: [ MyGroupsComponent, AddMemberComponent,
    GroupHeaderComponent, NoGroupResultComponent,
    AddActivityComponent, MemberActionsComponent, GroupMembersComponent, FtuPopupComponent,
    BackButtonComponent,
    ActivityListComponent,
    ActivityDashboardComponent,
    ActivitySearchComponent,
    ActivityFormComponent,
    CreateEditGroupComponent,
    GroupDetailsComponent,
    AddActivityContentTypesComponent,
    PopupComponent,
    ActivityDetailsComponent,
    ActivityDashboardDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ActivityDashboardDirective]
})
export class GroupsModule {
  constructor(private csLibInitializerService: CsLibInitializerService) {
    this.csLibInitializerService.initializeCs();
  }
 }
