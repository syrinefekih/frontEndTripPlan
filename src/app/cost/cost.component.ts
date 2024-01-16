import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowService } from '../workflow.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})

export class CostComponent implements OnInit {

  totalCost: number = 0;
  id = 0 as number ;
  flight: any;
  hotel: any;
  //activities: string[]; // List of activities

  constructor(private route: ActivatedRoute,private http: HttpClient,private workflowService : WorkflowService, private router: Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = params.get('id'); 
    });
    this.getFlight(this.id);
    
    this.getHotel(this.id);
    //this.activities = this.getActivities(); // Populate with actual activities
    this.calculateTotalCost();
  }

  getFlight(userId: number) {
    this.http.get(`http://localhost:8089/flights/flight/${userId}`)
      .subscribe(data => {
        this.flight = data;
      }, error => {
        console.error('Error fetching flight data', error);
      });
  }

  getHotel(userId: number) {
    this.http.get(`http://localhost:8089/hotels/hotel/${userId}`)
      .subscribe(data => {
        this.hotel = data;
      }, error => {
        console.error('Error fetching hotel data', error);
      });
  }


  calculateTotalCost() {
    this.totalCost = 0;
    console.log(this.flight);
    
    this.totalCost += this.flight.price;
    this.totalCost += this.hotel.price;
    
  }
}
