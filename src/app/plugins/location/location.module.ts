import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModalModule } from 'ng2-semantic-ui-v12';
import { SharedModule } from '../../modules/shared/shared.module';
import { TelemetryModule } from '../../modules/telemetry';

import { LocationSelectionComponent } from './components';
import { CommonFormElementsModule } from '@project-sunbird/common-form-elements';

@NgModule({
  declarations: [
    LocationSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModalModule,
    TelemetryModule,
    CommonFormElementsModule,
    SharedModule
  ],
  exports: [
    LocationSelectionComponent
  ]
})
export class LocationModule { }
