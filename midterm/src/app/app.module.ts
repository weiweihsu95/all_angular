import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BarComponent } from './bar/bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { MobileComponent } from './mobile/mobile.component';
import { ContactComponent } from './contact/contact.component';
import { ImportantComponent } from './important/important.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterestComponent } from './interest/interest.component';
import { ParksComponent } from './parks/parks.component';
import { ParkDetailComponent } from './park-detail/park-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BarComponent,
    EducationComponent,
    AboutComponent,
    SkillsComponent,
    MobileComponent,
    ContactComponent,
    ImportantComponent,
    InterestComponent,
    ParksComponent,
    ParkDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
