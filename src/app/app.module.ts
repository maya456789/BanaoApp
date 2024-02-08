import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './appPages/header/header.component';
import { FeaturesComponent } from './appPages/features/features.component';
import { TestmonialComponent } from './appPages/testmonial/testmonial.component';
import { CommunityComponent } from './appPages/community/community.component';
import { FooterComponent } from './appPages/footer/footer.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    TestmonialComponent,
    CommunityComponent,
    FooterComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
