import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ConversationComponent } from './conversation/conversation.component';
import { ZoomBoxComponent } from './zoom-box/zoom-box.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ZoomBoxComponent, ConversationComponent, AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '**', component: AppComponent }]),
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
