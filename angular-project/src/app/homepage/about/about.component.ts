import { Component, OnInit } from '@angular/core';
import { MissionStatement } from '../../../assets/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  missionText = MissionStatement;

  header: string = "Welcome to JSM";

  constructor() { }

  ngOnInit(): void {
  }

}
