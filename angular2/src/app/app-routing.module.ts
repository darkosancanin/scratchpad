import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CurrencyConverterComponent }  from './currency-converter/currency-converter.component';
import { HeaderComponent }  from './header/header.component';
import { LoginComponent }  from './login/login.component';
import { SettingsComponent }  from './settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: '/currency-converter', pathMatch: 'full' },
    { path: 'currency-converter', component: CurrencyConverterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}