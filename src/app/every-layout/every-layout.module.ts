import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box.component';
import { CenterComponent } from './center.component';
import { ClusterComponent } from './cluster.component';
import { CoverComponent } from './cover.component';
import { FrameComponent } from './frame.component';
import { GridComponent } from './grid.component';
import { ImposterComponent } from './imposter.component';
import { ReelComponent } from './reel.component';
import { SidebarComponent } from './sidebar.component';
import { StackComponent } from './stack.component';
import { SwitcherComponent } from './switcher.component';

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
