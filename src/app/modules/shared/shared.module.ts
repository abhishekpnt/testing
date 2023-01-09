import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ConfigService, ResourceService, ToasterService, BrowserCacheTtlService,
  NavigationHelperService, UtilService,
  ConnectionService, GenericResourceService
} from './index';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, NgxDatatableModule,
    TelemetryModule,
    TranslateModule.forChild(),

  ],
  declarations: [
  ],
  exports: [
  ],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ResourceService, ConfigService, ToasterService,
        NavigationHelperService, UtilService,
        DeviceDetectorService, BrowserCacheTtlService, TranslateStore, TitleCasePipe, ConnectionService, GenericResourceService]
    };
  }
}

