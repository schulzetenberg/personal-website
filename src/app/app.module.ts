import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ServerService } from './shared/server.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FullPageHeaderComponent } from './full-page-header/full-page-header.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Error500Component } from './error-500/error-500.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './about/music/music.component';
import { GithubComponent } from './about/github/github.component';
import { BooksComponent } from './about/books/books.component';
import { PodcastsComponent } from './about/podcasts/podcasts.component';
import { TvComponent } from './about/tv/tv.component';
import { StatesComponent } from './about/states/states.component';
import { DrivingComponent } from './about/driving/driving.component';
import { InstagramComponent } from './about/instagram/instagram.component';
import { ResumeComponent } from './about/resume/resume.component';
import { ProjectsComponent } from './about/projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: '500', component: Error500Component },
  { path: '404', component: NotFound404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    FullPageHeaderComponent,
    NotFound404Component,
    Error500Component,
    AboutComponent,
    MusicComponent,
    GithubComponent,
    BooksComponent,
    PodcastsComponent,
    TvComponent,
    StatesComponent,
    DrivingComponent,
    InstagramComponent,
    ResumeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng2GoogleChartsModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
