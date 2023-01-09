import { ContentManagerService } from './services';
import {
    SuiModalModule, SuiProgressModule, SuiAccordionModule,
    SuiTabsModule, SuiSelectModule, SuiDimmerModule, SuiCollapseModule, SuiDropdownModule
} from 'ng2-semantic-ui-v12';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { OfflineRoutingModule } from './offline-routing.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
    LibraryComponent, ContentManagerComponent, ContentManagerInfoPopUpComponent,
    LoadContentComponent, InfoCardComponent, TelemetryComponent, TelemetryImportComponent,
    AboutUsComponent
} from './components';
import { WebExtensionModule } from 'web-extensions-v12';
import { NgxFilesizeModule } from 'ngx-filesize';
import { OrderModule } from 'ngx-order-pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { ContentSearchModule } from '../../../content-search/content-search.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        SharedModule,
        OfflineRoutingModule,
        SuiModalModule,
        SuiProgressModule,
        SuiSelectModule,
        WebExtensionModule,
        NgxFilesizeModule,
        SuiAccordionModule,
        SuiTabsModule,
        OrderModule,
        SlickCarouselModule,
        ReactiveFormsModule,
        CommonConsumptionModule,
        SuiDimmerModule,
        NgInviewModule,
        SuiCollapseModule,
        SuiDropdownModule,
        ContentSearchModule,
    ],
    providers: [DeviceDetectorService, ContentManagerService],
    declarations: [
        LibraryComponent,
        LoadContentComponent,
        InfoCardComponent,
        TelemetryComponent,
        TelemetryImportComponent,
        ContentManagerInfoPopUpComponent,
        ContentManagerComponent,
        AboutUsComponent
    ],
    entryComponents: [
        ContentManagerComponent,
    ],
    exports: [InfoCardComponent]
})
export class OfflineModule { }
