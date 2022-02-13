import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './about/books/books.component';
import { RecentBooksComponent } from './about/books/recent-books/recent-books.component';
import { DrivingComponent } from './about/driving/driving.component';
import { GithubComponent } from './about/github/github.component';
import { InstagramComponent } from './about/instagram/instagram.component';
import { CountriesComponent } from './about/maps/countries/countries.component';
import { StatesComponent } from './about/maps/states/states.component';
import { MusicComponent } from './about/music/music.component';
import { PodcastsComponent } from './about/podcasts/podcasts.component';
import { ProjectsComponent } from './about/projects/projects.component';
import { ResumeComponent } from './about/resume/resume.component';
import { TvComponent } from './about/tv/tv.component';
import { AppComponent } from './app.component';
import { Error500Component } from './error-500/error-500.component';
import { FooterComponent } from './footer/footer.component';
import { FullPageHeaderComponent } from './full-page-header/full-page-header.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { ServerService } from './shared/server.service';
import { UsesComponent } from './uses/uses.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'fullpage', component: FullpageComponent },
  { path: 'about', component: AboutComponent },
  { path: '500', component: Error500Component },
  { path: '404', component: NotFound404Component },
];

@NgModule({
  declarations: [
    AppComponent,
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
    CountriesComponent,
    DrivingComponent,
    InstagramComponent,
    ResumeComponent,
    ProjectsComponent,
    UsesComponent,
    FullpageComponent,
    RecentBooksComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, Ng2GoogleChartsModule, AngularFullpageModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
