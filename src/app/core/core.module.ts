import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigOptionsService } from './services/config-options.service';
import { ConstantService } from './services/constant.service';
import { GeneratorService, generator } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';
import { CartService } from '../cart/services/cart.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClickDirective } from './directives/click.directive';

const constantService = new ConstantService();

@NgModule({
  declarations: [ContactUsComponent, ClickDirective],
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    { provide: ConstantService, useValue: constantService },
    { provide: generator, useFactory: GeneratorService(8) },
    LocalStorageService,
    CartService
  ]
})
export class CoreModule { }
