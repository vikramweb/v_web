import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DdpageComponent } from './ddpage.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';


const routes: Routes = [
  { path: 'ddpage', component: DdpageComponent,
    children:[
      { path: 'link1', component: Link1Component },
      { path: 'link2', component: Link2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DdpageRoutingModule { }
