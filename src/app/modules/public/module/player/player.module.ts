import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { SharedModule } from '../../../shared/shared.module';
import { BadgingModule } from '../../../badging/badging.module';
import { CoreModule } from '../../../core/core.module';
import { PlayerHelperModule } from '../../../player-helper/player-helper.module';
import { SuiModalModule } from 'ng2-semantic-ui-v12';
import { CommonConsumptionModule} from '@project-sunbird/common-consumption';
import { SharedFeatureModule } from '../../../shared-feature/shared-feature.module';

@NgModule({
    imports: [
        CommonModule,
        PlayerRoutingModule,
        TelemetryModule,
        SharedModule,
        BadgingModule,
        CoreModule,
        PlayerHelperModule,
        SuiModalModule,
        CommonConsumptionModule,
        SharedFeatureModule
    ],
    providers: [],
    declarations: []
})
export class PlayerModule { }
