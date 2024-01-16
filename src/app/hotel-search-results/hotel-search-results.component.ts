import { Component ,Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../model/Hotel';
import { WorkflowService } from '../workflow.service';


@Component({
  selector: 'app-hotel-search-results',
  templateUrl: './hotel-search-results.component.html',
  styleUrls: ['./hotel-search-results.component.css']
})
export class HotelSearchResultsComponent implements OnInit {
  resultData: any;
  myHotel = {} as Hotel;
  id = 0 as number ;

  constructor(private route: ActivatedRoute, private hotelService : HotelService,private workflowService : WorkflowService, private router: Router) {}

  ngOnInit(): void {
    this.resultData = history.state.data;
    console.log('Result Data received:', this.resultData);
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = params.get('id'); 
    });
  }
  saveHotel(hotel: any) {
    console.log(hotel.property);
    
    this.myHotel.label=hotel.property.name;
    this.myHotel.photoUrl=hotel.property.photoUrls[0];
    this.myHotel.price=hotel.property.priceBreakdown.strikethroughPrice.value;
    this.myHotel.userId=this.id;
    console.log(this.myHotel);
    
    this.hotelService.saveHotel(hotel);
    this.workflowService.completeTask5(this.id.toString());
    this.router.navigate(['/resume',this.id]);
  }

}
