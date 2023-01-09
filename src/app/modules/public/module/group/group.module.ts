import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { ExploreGroupComponent, ExploreFtuPopupComponent } from './components';
import {SharedFeatureModule} from '../../../shared-feature/shared-feature.module';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    GroupRoutingModule,
    SharedFeatureModule
  ],
  declarations: [ ExploreGroupComponent, ExploreFtuPopupComponent ],
  exports: []
})
export class GroupModule { }
