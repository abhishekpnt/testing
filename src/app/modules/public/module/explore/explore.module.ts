import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ExploreRoutingModule } from './explore-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContentComponent, ExploreCurriculumCoursesComponent} from './components';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import {SharedFeatureModule} from '../../../shared-feature/shared-feature.module';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule, SuiDimmerModule } from 'ng2-semantic-ui-v12';
import { WebExtensionModule } from 'web-extensions-v12';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { ContentSearchModule } from '../../../content-search/content-search.module';

@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    ExploreRoutingModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, SuiDimmerModule, WebExtensionModule,
    CommonConsumptionModule, ContentSearchModule, SlickCarouselModule
  ],
  declarations: [ ExploreContentComponent, ExploreCurriculumCoursesComponent]
})
export class ExploreModule { }
