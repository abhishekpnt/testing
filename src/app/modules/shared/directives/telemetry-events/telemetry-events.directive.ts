import { Directive, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { TelemetryService } from '../../../telemetry';
import { UtilService } from '../../services/util/util.service';
/**
 * Reference links:
 * https://www.tektutorialshub.com/angular/renderer2-angular/
 * https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-3-renderer2-listen-14c6fe052b59
 */
@Directive({
  selector: '[telemetryEventsButton]'
})

export class TelemetryEventsDirective implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef,
    private telemetryService: TelemetryService,
    private utilService: UtilService,
    private renderer2: Renderer2) {
  }

  unlistenTelemetryEventShow;
  unlistenTelemetryEvent;

  ngOnInit() {
    this.unlistenTelemetryEventShow = this.renderer2.listen('document', 'TelemetryEvent:show', event => {
      this.showTelemetryOption(event);
    });

    // Reference: https://github.com/project-sunbird/sunbird-telemetry-sdk/blob/master/js/core/telemetryV3Interface.js
    this.unlistenTelemetryEvent = this.renderer2.listen('document', 'TelemetryEvent', event => {
      this.telemetryEventHandler(event);
    });

    this.showOrHideElement(false);
  }

  /**
   * Catch document event to show/hide telemetry button bases on event data
   * @param event object ex: {detail: {show: true}}
   * document.dispatchEvent(new CustomEvent('TelemetryEvent:show', {detail: {show: true}}));
   */
  showTelemetryOption(event) {
    const showButton = event.detail && event.detail.show ? true : false;
    this.showOrHideElement(showButton);
  }

  /**
   * Apply style to the telemetry button based on input true => "block" & false => "none"
   * @param show ex: true/false
   *
   */
  showOrHideElement(show: boolean) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', show ? 'block' : 'none');
  }

  /**
   * Catch all telemetry events generated by the telemetry library
   * @param event ex: final telemetry event generated by library
   */
  telemetryEventHandler(event) {
    const telemetryEvents = this.telemetryService.telemetryEvents;
    const latestEvent = telemetryEvents && telemetryEvents[0];
    if (event && event.detail) {
      const teleEvent = event.detail;
      if (latestEvent && (latestEvent.mid == teleEvent.mid)) {
        // Avoid duplicate events adding to the list
        return;
      }

      // To add only Error events to the list
      if (teleEvent.eid && (teleEvent.eid.toLowerCase() === 'error')) {
        const flatJson = this.utilService.flattenObject(teleEvent);
        this.telemetryService.telemetryEvents.push(flatJson);
      }
    }
  }

  /**
   * Destroy all the listeners on destroying of the component
   * Because ngOnInit it will add the new listerners again
   */
  ngOnDestroy() {
    this.unlistenTelemetryEvent && this.unlistenTelemetryEventShow();
    this.unlistenTelemetryEvent && this.unlistenTelemetryEvent();
  }
}
