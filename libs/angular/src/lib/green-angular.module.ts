import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggAccordionModule } from './accordion'
import { NggBadgeModule } from './badge/badge.module'
import { NggDatepickerModule } from './datepicker/datepicker.module'
import { NggDropdownModule } from './dropdown/dropdown.module'
import { NggModalModule } from './modal'
import { NggProgressCircleModule } from './progress-circle/progress-circle.module'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggButtonModule } from './button/button.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggAccordionModule,
    NggBadgeModule,
    NggButtonModule,
    NggDatepickerModule,
    NggDropdownModule,
    NggModalModule,
    NggProgressCircleModule,
    NggSegmentedControlModule,
  ],
})
export class NggModule {}
