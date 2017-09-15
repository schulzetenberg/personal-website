import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ServerService } from './server.service';
import { AppComponent } from './app.component';
import { TopNavHeaderComponent } from './top-nav-header/top-nav-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NoIconFooterComponent } from './no-icon-footer/no-icon-footer.component';
import { NoNavHeaderComponent } from './no-nav-header/no-nav-header.component';
import { HeaderComponent } from './header/header.component';
import { AlbumArtComponent } from './album-art/album-art.component';
import { BeautifyComponent } from './beautify/beautify.component';
import { ProjectsComponent } from './projects/projects.component';
import { SeniorDesignComponent } from './senior-design/senior-design.component';
import { WebsiteComponent } from './website/website.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { Error500Component } from './error-500/error-500.component';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'album-art', component: AlbumArtComponent },
  { path: 'beautify', component: BeautifyComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '500', component: Error500Component },
  { path: '404', component: NotFound404Component },
  { path: 'projects', component: ProjectsComponent },
  { path: 'senior-design', component: SeniorDesignComponent },
  { path: 'website', component: WebsiteComponent }
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
    AlbumArtComponent,
    BeautifyComponent,
    ProjectsComponent,
    SeniorDesignComponent,
    WebsiteComponent,
    NotFound404Component,
    Error500Component,
    AboutComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
