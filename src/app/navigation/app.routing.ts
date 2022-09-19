import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ItemsComponent } from "../item/items.component";
import { ItemDetailComponent } from "../item/item-detail.component";

const AppRoutes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(AppRoutes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
