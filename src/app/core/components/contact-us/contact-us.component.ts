import { Component, Optional, Inject } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantService } from '../../services/constant.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private _cartService: CartService,
              private _configOptionsService: ConfigOptionsService,
              @Optional() private _constantService: ConstantService,
              @Inject('generator') private _generatorService: Function,
              private _localStorageService: LocalStorageService) { }

}
