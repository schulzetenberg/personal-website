import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './about/instagram/instagram.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FullPageHeaderComponent } from './full-page-header/full-page-header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServerService } from './shared/server.service';

const appRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, FooterComponent, FullPageHeaderComponent, InstagramComponent, HomeComponent, ProjectsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
