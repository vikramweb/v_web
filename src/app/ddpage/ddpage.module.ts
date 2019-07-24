import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdpageRoutingModule } from './ddpage-routing.module';

import { DdpageComponent } from './ddpage.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';

@NgModule({
  declarations: [
    DdpageComponent,
    Link1Component,
    Link2Component
  ],
  imports: [
    CommonModule,
    DdpageRoutingModule
  ],
  providers: [],
  bootstrap: [DdpageComponent]
})
export class DdpageModule { }
