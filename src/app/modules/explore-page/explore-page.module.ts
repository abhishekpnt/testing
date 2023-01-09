import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import {
  SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule, SuiDimmerModule
} from 'ng2-semantic-ui-v12';
import { WebExtensionModule } from 'web-extensions-v12';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { ContentSearchModule } from '../content-search/content-search.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ExplorePageComponent } from './components';
import { ContentSectionModule } from 'content-section-v11';
import {ObservationModule} from '../observation/observation.module';

@NgModule({
  declarations: [ExplorePageComponent],
  imports: [
    ExplorePageRoutingModule,
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, SuiDimmerModule, WebExtensionModule,
    CommonConsumptionModule, ContentSearchModule, SlickCarouselModule, ContentSectionModule, ObservationModule
  ]
})
export class ExplorePageModule { }
