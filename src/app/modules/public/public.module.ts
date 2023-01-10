import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LandingPageComponent } from './components';
import { PublicPlayerService, LandingpageGuard, PendingchangesGuard } from './services';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CdnprefixPipe } from '../shared/pipes/cdnprefix.pipe';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    PublicRoutingModule
  ],
  declarations: [LandingPageComponent],
  providers: [PublicPlayerService, DeviceDetectorService, LandingpageGuard, PendingchangesGuard,CdnprefixPipe]
})
export class PublicModule { }
