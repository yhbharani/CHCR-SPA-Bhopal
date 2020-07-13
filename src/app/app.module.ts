import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AngularFireModule } from 'angularfire2';

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
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';


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
    PartnersComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule, BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
