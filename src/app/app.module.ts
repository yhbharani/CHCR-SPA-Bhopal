import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroComponent } from './intro/intro.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { EducationComponent } from './education/education.component';
import { PublicationComponent } from './publication/publication.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    IntroComponent,
    NewsComponent,
    AboutComponent,
    TeamComponent,
    EducationComponent,
    PublicationComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
