import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-service',
  templateUrl: './schedule-service.component.html',
  styleUrls: ['./schedule-service.component.scss', '../shared-components/form-container/form-container.component.scss']
})
export class ScheduleServiceComponent implements OnInit {

  constructor() { }

  formTitle: string = 'Log In to Schedule Service'

  username: string;
  password: string;

  ngOnInit(): void {
  }

}
