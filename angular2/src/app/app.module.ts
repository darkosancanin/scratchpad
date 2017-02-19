import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { CurrencyConverterComponent }  from './currency-converter/currency-converter.component';
import { HeaderComponent }  from './header/header.component';
import { SettingsComponent }  from './settings/settings.component';

import { CurrencyService } from './services/currency.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAnLS5mp5kivlVlIbktbu6fw6TSRT6nEqc",
  authDomain: "ang-scratchpad.firebaseapp.com",
  databaseURL: "https://ang-scratchpad.firebaseio.com",
  storageBucket: "ang-scratchpad.appspot.com",
  messagingSenderId: "1086326799295"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, CurrencyConverterComponent, HeaderComponent, SettingsComponent, LoginComponent, SignupComponent ],
  providers: [ CurrencyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }