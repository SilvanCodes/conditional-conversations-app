import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './modules/graphql.module';
import { EveryLayoutModule } from './modules/every-layout/every-layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GraphQLModule, EveryLayoutModule],
  exports: [EveryLayoutModule],
})
export class CoreModule {}
