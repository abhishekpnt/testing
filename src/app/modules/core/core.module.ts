import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { AuthGuard } from './guard/auth-gard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TelemetryModule,
 
  ],
  declarations: [],
  exports: [],
  providers: [ AuthGuard, {
    provide: APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
    deps: [PlatformLocation]
  }]
})
export class CoreModule {
}
