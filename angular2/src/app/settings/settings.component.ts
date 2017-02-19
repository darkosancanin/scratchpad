import { Component } from '@angular/core';

import { Settings } from '../model/settings';

import { CurrencyService } from '../services/currency.service';

@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent {
    currencies: string[];
    model = new Settings("Guest", "User", "AUD");

    constructor(private currencyService: CurrencyService){
        this.currencies = currencyService.getAllCurrencies();
    }
}