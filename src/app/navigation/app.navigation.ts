import { Injectable } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Injectable()
export class AppNavigation {

  // JSCrambler error on iPhone 6
  constructor(private _router: RouterExtensions) {}

  // JSCrambler no error on iPhone 6
  // constructor() {}

  goToHome(): void {
    this._router.navigate(['home']);
  }
}
