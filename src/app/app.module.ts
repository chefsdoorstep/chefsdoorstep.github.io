import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Homepage/header/header.component';
import { JumbotronComponent } from './Homepage/jumbotron/jumbotron.component';
import { RecommendedComponent } from './Homepage/recommended/recommended.component';
import { CardComponent } from './cards/resturants/card.component';
import { HowItWorksComponent } from './Homepage/how-it-works/how-it-works.component';
import { HowItWorksCardComponent } from './cards/how-it-works/card.component';
import { PopularResturantsComponent } from './Homepage/popular-resturants/popular-resturants.component';
import { DownloadAppComponent } from './Homepage/download-app/download-app.component';
import { TestimoniesComponent } from './Homepage/testimonies/testimonies.component';
import { TestimoniesCardComponent } from './cards/testimonies-card/testimonies-card.component';
import { HomeComponent } from './Homepage/home.component';
import { FooterComponent } from './footer/footer.component';
import { ChefService } from './Homepage/Services/chef-service.service';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ChefComponent } from './chef/chef/chef.component';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    RecommendedComponent,
    CardComponent,
    HowItWorksComponent,
    HowItWorksCardComponent,
    PopularResturantsComponent,
    DownloadAppComponent,
    TestimoniesComponent,
    TestimoniesCardComponent,
    HomeComponent,
    FooterComponent,
    ChefComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    AutoCompleteModule,
    GalleriaModule
  ],
  providers: [ChefService],
  bootstrap: [AppComponent]
})
export class AppModule {}
