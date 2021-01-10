import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

import { EveryLayoutModule } from './every-layout/every-layout.module';
import { ConversationComponent } from './conversation/conversation.component';
import { RouterModule } from '@angular/router';
import { ZoomBoxComponent } from './zoom-box/zoom-box.component';

@NgModule({
  declarations: [ZoomBoxComponent, ConversationComponent, AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '**', component: AppComponent }]),
    HttpClientModule,
    ReactiveFormsModule,
    GraphQLModule,
    EveryLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
