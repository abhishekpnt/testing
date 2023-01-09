import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent, OtpComponent, SignupBasicInfoComponent, SignupOnboardingInfoComponent, SignupEmailPasswordComponent } from './components';
import { SignupRoutingModule } from './signup-routing.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { SignupService } from './services';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { SharedModule } from '../../../shared/shared.module';
import { SharedFeatureModule } from '../../../shared-feature/shared-feature.module';
import { LocationModule } from '../../../../plugins/location';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    TelemetryModule,
    SharedModule,
    SharedFeatureModule,
    LocationModule
  ],
  declarations: [SignupComponent, OtpComponent, SignupBasicInfoComponent, SignupOnboardingInfoComponent, SignupEmailPasswordComponent],
  providers: [SignupService]
})
export class SignupModule { }
