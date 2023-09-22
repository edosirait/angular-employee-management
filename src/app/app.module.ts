import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { cloudIcon, ClarityIcons } from '@cds/core/icon';
import { CdsIconModule } from '@cds/angular/icon';
import { CdsAccordionModule } from '@cds/angular/accordion';
import { CdsAlertModule } from '@cds/angular/alert';
import { CdsButtonModule } from '@cds/angular/button';
import { CdsCheckboxModule } from '@cds/angular/checkbox';
import { CdsDatalistModule } from '@cds/angular/datalist';
import { CdsFormsModule } from '@cds/angular/forms';
import { CdsFileModule } from '@cds/angular/file';
import { CdsInputModule } from '@cds/angular/input';
import { CdsPasswordModule } from '@cds/angular/password';
import { CdsRadioModule } from '@cds/angular/radio';
import { CdsRangeModule } from '@cds/angular/range';
import { CdsSearchModule } from '@cds/angular/search';
import { CdsSelectModule } from '@cds/angular/select';
import { CdsTagModule } from '@cds/angular/tag';
import { CdsTextareaModule } from '@cds/angular/textarea';
import { CdsTimeModule } from '@cds/angular/time';
import { CdsToggleModule } from '@cds/angular/toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ListComponent } from './employee/list/list.component';
import { FormComponent } from './employee/form/form.component';
import { PopupComponent } from './shared/popup/popup.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RupiahPipe } from './employee/_pipe/rupiah.pipe';
import { CdsModule } from '@cds/angular';

import { CdsModalModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,

    ListComponent,
    FormComponent,
    PopupComponent,
    EmployeeComponent,
    RupiahPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CdsIconModule,
    CdsAccordionModule,
    CdsAlertModule,
    CdsButtonModule,
    CdsCheckboxModule,
    CdsDatalistModule,
    CdsFileModule,
    CdsFormsModule,
    CdsInputModule,
    CdsPasswordModule,
    CdsRadioModule,
    CdsRangeModule,
    CdsSearchModule,
    CdsSelectModule,
    CdsTagModule,
    CdsTextareaModule,
    CdsTimeModule,
    CdsToggleModule,
    CdsModalModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CdsModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(cloudIcon);
  }
}
