import { TelemetryModule } from '../telemetry/telemetry.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { EnrollBatchComponent } from './components/batch/enroll-batch/enroll-batch.component';
import { CreateBatchComponent } from './components/batch/create-batch/create-batch.component';
import { UpdateCourseBatchComponent } from './components/batch/update-course-batch/update-course-batch.component';
import { BatchRoutingModule } from './batch-routing.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SuiModule,
    FormsModule,
    CoreModule,
    TelemetryModule,
    SharedFeatureModule,
    BatchRoutingModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [],
  declarations: [EnrollBatchComponent, CreateBatchComponent, UpdateCourseBatchComponent]
})
export class BatchModule { }
