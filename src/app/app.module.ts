import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    LinkButtonComponent,
    PageContainerComponent,
    HomeComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
