import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NewServerComponent } from './new-server/new-server.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NewServerComponent,
    ServerElementsComponent,
    DemoDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
