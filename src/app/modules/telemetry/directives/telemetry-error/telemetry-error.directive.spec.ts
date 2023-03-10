import {of as observableOf,  Observable } from 'rxjs';
import { TelemetryErrorDirective } from './telemetry-error.directive';
import { TelemetryService, TELEMETRY_PROVIDER } from '../../services';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {eventData} from './telemetry-error.dircetive.spec.data';

describe('TelemetryErrorDirective', () => {
let directive:TelemetryErrorDirective;
const telemetryService: Partial<TelemetryService> = {
    error: jest.fn()
};

beforeEach(() => {
    directive = new TelemetryErrorDirective(telemetryService as TelemetryService);
});
  it('should take input and generate the telemetry  error event ', () => {
    jest.spyOn(telemetryService, 'error').mockImplementation(() => observableOf(eventData.inputData));
    directive.appTelemetryError = eventData.inputData;
    directive.ngOnChanges();
    expect(directive.appTelemetryError).toBeDefined();
    expect(directive.appTelemetryError).toBe(eventData.inputData);
    expect(telemetryService.error).toHaveBeenCalled();
  });
});