import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptModule
} from '@nativescript/angular';

import { AppComponent } from './app.component';
import { AppNavigation } from './navigation/app.navigation';
import { AppRoutingModule } from './navigation/app.routing';
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

//TODO: init facebook plugin
@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [
    AppNavigation
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
