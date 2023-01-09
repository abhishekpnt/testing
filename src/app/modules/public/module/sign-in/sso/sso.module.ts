import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoRoutingModule } from './sso-routing.module';
import {SelectOrgComponent, UpdateContactComponent, AuthFailedComponent} from './components';
import {TelemetryModule} from '../../../../telemetry/telemetry.module';
import { SharedFeatureModule } from '../../../../shared-feature/shared-feature.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    SsoRoutingModule,
    SuiModule,
    TelemetryModule,
    SharedFeatureModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    SharedModule
  ],
  declarations: [SelectOrgComponent, UpdateContactComponent, AuthFailedComponent]
})
export class SsoModule { }
