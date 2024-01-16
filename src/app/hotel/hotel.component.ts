import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowService } from '../workflow.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  id : any;
  searchForm: any = {}; // This object will hold the form data
  searchResult: any;
  constructor(private http: HttpClient, private router: Router,private workflowService : WorkflowService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
        this.id = params.get('id'); 
      });
}
  // Function to handle form submission

  searchHotels() {
    const url = `http://localhost:8089/hotels/search`;
    const queryParams = `?arrivalDate=${this.searchForm.arrivalDate}&departureDate=${this.searchForm.departureDate}&adults=${this.searchForm.adults}&roomQty=${this.searchForm.roomQty}`;

    this.http.get<any>(url + queryParams).subscribe(
      (response) => {
        console.log('Hotel search result*************:', response);
        this.searchResult = response;
        this.router.navigate(['/hotel-search-results',this.id], { state: { data: this.searchResult } });
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}

