import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { WorkflowService } from '../workflow.service';
import { Flight } from '../model/Flight';
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent  implements OnInit{
  resultData: any;
  id = 0 as number ;
  myFlight={} as Flight;
  constructor(private route: ActivatedRoute,private flightService : FlightService,private workflowService : WorkflowService, private router: Router) { }

  ngOnInit(): void {
    this.resultData = history.state.data;
    console.log('Result Data received:', this.resultData);
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = params.get('id'); 
    });
  }

  saveFlight(flight: any) {
  this.myFlight.departureDate=flight.departureDate;
  this.myFlight.price=flight.price.units;
  this.myFlight.userId=this.id;
  console.log(this.id);
  console.log(this.myFlight);
  this.flightService.saveFlight(this.myFlight);
  this.workflowService.completeTask4(this.id.toString());
  this.router.navigate(['/hotels',this.id]);

  }
}
