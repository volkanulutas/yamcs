import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/SharedModule';
import { MonitorRoutingModule, routingComponents } from './MonitorRoutingModule';
import { MonitorPageTemplate } from './template/MonitorPageTemplate';
import { ProcessorInfoComponent } from './template/ProcessorInfoComponent';
import { EventSeverityComponent } from './events/EventSeverityComponent';
import { DisplayNavigator } from './displays/DisplayNavigator';
import { SaveLayoutDialog } from './displays/SaveLayoutDialog';
import { LayoutComponent } from './displays/LayoutComponent';
import { AlarmDetail } from './alarms/AlarmDetail';

const dialogComponents = [
  SaveLayoutDialog,
];

@NgModule({
  imports: [
    SharedModule,
    MonitorRoutingModule,
  ],
  declarations: [
    routingComponents,
    dialogComponents,
    AlarmDetail,
    DisplayNavigator,
    EventSeverityComponent,
    LayoutComponent,
    MonitorPageTemplate,
    ProcessorInfoComponent,
  ],
  entryComponents: [
    dialogComponents,
  ]
})
export class MonitorModule {
}
