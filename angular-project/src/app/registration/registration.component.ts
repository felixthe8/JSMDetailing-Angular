import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../shared-components/form-container/form-container.component.scss']
})
export class RegistrationComponent implements OnInit {

  formTitle = 'JSM Registration'

  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmSuccess(): void
  {
    // Navigate back to homepage after successful registration
    this.router.navigate(['/'])
  }

  resetInputs() : void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.userName= '';
    this.password = '';
    this.confirmPassword = '';
  }

}
