import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelSearchResultsComponent } from './hotel-search-results/hotel-search-results.component';
import { HotelComponent } from './hotel/hotel.component';
import { ResumeComponent } from './resume/resume.component';
import { CostComponent } from './cost/cost.component'; // Import the ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResultComponent,
    WelcomeComponent,
    FlightSearchComponent,
    HotelSearchResultsComponent,
    HotelComponent,
    ResumeComponent,
    CostComponent,
    
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
