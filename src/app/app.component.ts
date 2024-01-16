import { Component } from '@angular/core';
import { SemanticService } from './semantic.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semantic';
  enteredText: string = '';
  constructor(
    private semanticService: SemanticService,
    private router: Router
  ) {}
  submitText() {
    this.semanticService.processInput(this.enteredText)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/result'], { state: { data: response } });
      }, error => {
        console.error('Error:', error);
      });
  }
}
