import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { WorkflowService } from '../workflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private workflowService:WorkflowService, private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

   async onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      const resp= await this.userService.saveUser(user);
      console.log(resp);
      console.log("suceess");
      this.workflowService.startProcess(resp);
      this.router.navigate(['/input/',resp])
    };
  }
}
