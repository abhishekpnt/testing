import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { SharedModule } from '../shared/shared.module';
import { ContentBadgeComponent } from './components/content-badge/content-badge.component';
import { AssignBadgesContentComponent } from './components/assign-badges-content/assign-badges-content.component';
import { ContentBadgeService } from './services/content-badge.service';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        SuiModule,
        SharedModule.forRoot(),
        TelemetryModule,
        MatTooltipModule
    ],
    declarations: [ContentBadgeComponent, AssignBadgesContentComponent],
    exports: [ContentBadgeComponent, AssignBadgesContentComponent],
    providers: [ContentBadgeService]
})
export class BadgingModule {

}
