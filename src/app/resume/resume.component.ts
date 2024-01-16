import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowService } from '../workflow.service';
import { HotelService } from '../hotel.service';
import { FlightService } from '../flight.service';
import { Flight } from '../model/Flight';
import { Hotel } from '../model/Hotel';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  id = 0 as number ;
  flight= {} as Flight;
  hotel= {} as Hotel;
  totalCost: number = 0;

  //activities: string[]; // List of activities

  constructor(private route: ActivatedRoute,private http: HttpClient,private workflowService : WorkflowService, private router: Router,private hotelService : HotelService,private flightService : FlightService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = params.get('id'); 
    });
    this.findFlightObjectById(this.id).subscribe(data => {
      this.flight=data;
    });
    this.findHotelObjectById(this.id).subscribe(data => {
      this.hotel=data;
    });    
    console.log(this.flight,this.hotel);
    
    //this.activities = this.getActivities(); // Populate with actual activities
    this.calculateTotalCost();

  }




  findFlightObjectById(id:any){
    console.log(this.flightService.findById(id));
    
    return this.flightService.findById(id);
}
findHotelObjectById(id:any){
  console.log(this.hotelService.findById(id));
  
  return this.hotelService.findById(id);
}
  getActivities(): string[] {
    // Ideally, these activities should be fetched from the backend or based on the country visited.
    return ['Activity 1', 'Activity 2', 'Activity 3'];
  }

  confirmAndNavigate() {
    // Logic to perform before navigation (if any)
    
    // Navigate to another page, e.g., '/confirmation'
    this.router.navigate(['/confirmation',this.id]);
  }
  calculateTotalCost() {
    this.totalCost = 0;
    console.log(this.flight.price);
        
    this.totalCost += this.flight.price;
    this.totalCost += this.hotel.price;
    
  }

}
