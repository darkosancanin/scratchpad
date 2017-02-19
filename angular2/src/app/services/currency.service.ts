import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Currency } from '../model/currency';

@Injectable()
export class CurrencyService{
    constructor(public http: Http){
    }

    getAllCurrencies(): string[]{
        return ['AUD', 'EUR', 'USD'];
    }
}
