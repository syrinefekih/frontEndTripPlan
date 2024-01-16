import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SemanticService } from '../semantic.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WorkflowService } from '../workflow.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultData: any;
  id:any;
  resource = { departureDate: new Date().toISOString().split('T')[0] };

  constructor(private http: HttpClient,private route: ActivatedRoute,private semanticService: SemanticService, private router: Router,private workflowService : WorkflowService) {}

  ngOnInit() {
    this.resultData = history.state.data;
    console.log('Result Data received from the submit:', this.resultData);
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
          this.id = params.get('id'); 
        });
  }
  confirm(resource: any) {
    // Assuming you have an endpoint named 'confirmResource' in your SemanticService
    // Adjust the endpoint name as per your actual service
    this.semanticService.confirmResource({
      surfaceForm: resource['@surfaceForm'],
      arrivalDate: resource.arrivalDate,
      departureDate: resource.departureDate
    }).subscribe(
      response => {
        // Handle successful confirmation if needed
        console.log('Confirmation response:', response);
      },
      error => {
        // Handle error if the confirmation fails
        console.error('Confirmation error:', error);
      }
    );

  }

  confirm2(resource: any) {
    const fromId = 'BOM.AIRPORT'; // Replace with your fromId value
    const toId = 'DEL.AIRPORT'; // Replace with your toId value

    const url = `http://localhost:8089/flights/getMinFlightPrice`;
    const params = {
      fromId: fromId,
      toId: toId,
      departDate: resource.departureDate,
      currencyCode: 'AED'
    };

    this.http.get<any>(url, { params }).subscribe(
      (response) => {
        console.log('Flight search result*************:', response);
        this.router.navigate(['/flight-result',this.id], { state: { data: response } });
      },
      (error) => {
        console.error('Error occurred:', error);
        // Handle error responses
      }
    );
    this.workflowService.completeTask3(this.id);
  }
}
