import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { UserComponent } from './user/user.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelSearchResultsComponent } from './hotel-search-results/hotel-search-results.component';
import { ResumeComponent } from './resume/resume.component';
import { CostComponent } from './cost/cost.component';

const routes: Routes = [

  { path: 'input/:id', component: WelcomeComponent },
    { path: 'result/:id', component: ResultComponent },
    { path: 'flight-result/:id', component: FlightSearchComponent },
    { path: '', component: UserComponent },
    { path: 'hotels/:id', component: HotelComponent },
    { path: 'hotel-search-results/:id', component: HotelSearchResultsComponent },
    { path: 'resume/:id', component: ResumeComponent },
    { path: 'confirmation/:id', component: CostComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
