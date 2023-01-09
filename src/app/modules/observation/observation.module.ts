import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule, SuiModalModule, SuiSelectModule, SuiAccordionModule, SuiPopupModule, SuiDimmerModule, SuiTabsModule, SuiDropdownModule, SuiProgressModule, SuiRatingModule, SuiCollapseModule} from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservationRoutingModule } from './observation-routing.module';
import { MlGuard } from './guards';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { AvatarModule } from 'ngx-avatar';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { ContentSearchModule } from '../content-search/content-search.module';
import { TranslateModule } from '@ngx-translate/core';
import {
  AddEntityComponent, SubmissionsComponent, ObservationListingComponent, ObservationDetailsComponent,
  EntityListComponent, EditSubmissionComponent
} from './components';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LocationModule } from '../../plugins/location/location.module';
import {PlayerHelperModule} from '../player-helper';

@NgModule({
  declarations: [ObservationListingComponent, ObservationDetailsComponent, AddEntityComponent, SubmissionsComponent,
    EntityListComponent, EditSubmissionComponent],
  imports: [
    CommonModule,
    ObservationRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    SuiModule,
    SuiSelectModule,
    SuiModalModule,
    SuiAccordionModule,
    SuiPopupModule,
    SuiDropdownModule,
    SuiProgressModule,
    SuiRatingModule,
    SuiCollapseModule,
    TranslateModule,
    SuiDimmerModule,
    SuiTabsModule,
    ContentSearchModule,
    CommonConsumptionModule,
    SharedFeatureModule,
    AvatarModule,
    NgInviewModule,
    TelemetryModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    SharedFeatureModule,
    LocationModule,
    InfiniteScrollModule,
    PlayerHelperModule
  ],
  providers: [MlGuard]

})
export class ObservationModule { }
