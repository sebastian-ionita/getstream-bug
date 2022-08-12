import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TranslateModule} from "@ngx-translate/core";
import {StreamChatModule, StreamTextareaModule} from "stream-chat-angular";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, TranslateModule.forRoot(), StreamTextareaModule, StreamChatModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
