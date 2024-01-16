import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { SemanticService } from '../semantic.service';
import { WorkflowService } from '../workflow.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  enteredText: string = '';
  id : any;
  constructor(
    private semanticService: SemanticService,
    private router: Router,
    private workflowService : WorkflowService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
        this.id = params.get('id'); 
      });
}
  submitText() {
    this.semanticService.processInput(this.enteredText)
      .subscribe(response => {
        this.router.navigate(['/result',this.id], { state: { data: response } });
      }, error => {
        console.error('Error:', error);
      });
      this.workflowService.completeTask1(this.id);
  }
}

