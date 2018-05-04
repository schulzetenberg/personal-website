import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { ServerService } from './server.service';
import { AppComponent } from './app.component';
import { TopNavHeaderComponent } from './top-nav-header/top-nav-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NoIconFooterComponent } from './no-icon-footer/no-icon-footer.component';
import { NoNavHeaderComponent } from './no-nav-header/no-nav-header.component';
import { HeaderComponent } from './header/header.component';
import { BeautifyComponent } from './beautify/beautify.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Error500Component } from './error-500/error-500.component';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MusicComponent } from './about/music/music.component';
import { GithubComponent } from './about/github/github.component';
import { BooksComponent } from './about/books/books.component';
import { TvComponent } from './about/tv/tv.component';
import { StatesComponent } from './about/states/states.component';
import { DrivingComponent } from './about/driving/driving.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'beautify', component: BeautifyComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '500', component: Error500Component },
  { path: '404', component: NotFound404Component },
]

@NgModule({
  declarations: [
    AppComponent,
    TopNavHeaderComponent,
    HomeComponent,
    FooterComponent,
    NoIconFooterComponent,
    NoNavHeaderComponent,
    HeaderComponent,
    BeautifyComponent,
    NotFound404Component,
    Error500Component,
    AboutComponent,
    ComingSoonComponent,
    MusicComponent,
    GithubComponent,
    BooksComponent,
    TvComponent,
    StatesComponent,
    DrivingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    Ng2GoogleChartsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
