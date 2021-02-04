import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoxComponent } from './every-layout/box.component';
import { CenterComponent } from './every-layout/center.component';
import { ClusterComponent } from './every-layout/cluster.component';
import { CoverComponent } from './every-layout/cover.component';
import { FrameComponent } from './every-layout/frame.component';
import { GridComponent } from './every-layout/grid.component';
import { ImposterComponent } from './every-layout/imposter.component';
import { ReelComponent } from './every-layout/reel.component';
import { SidebarComponent } from './every-layout/sidebar.component';
import { StackComponent } from './every-layout/stack.component';
import { SwitcherComponent } from './every-layout/switcher.component';

@NgModule({
  declarations: [
    BoxComponent,
    CenterComponent,
    ClusterComponent,
    CoverComponent,
    FrameComponent,
    GridComponent,
    ImposterComponent,
    ReelComponent,
    SidebarComponent,
    StackComponent,
    SwitcherComponent,
  ],
  imports: [CommonModule],
  exports: [
    BoxComponent,
    CenterComponent,
    ClusterComponent,
    CoverComponent,
    FrameComponent,
    GridComponent,
    ImposterComponent,
    ReelComponent,
    SidebarComponent,
    StackComponent,
    SwitcherComponent,
  ],
})
export class EveryLayoutModule {}
