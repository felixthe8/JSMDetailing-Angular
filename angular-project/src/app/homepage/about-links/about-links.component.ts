import { Component, OnInit } from '@angular/core';
import { faAddressCard, faPhone, faAt, faMapMarker, faSignInAlt, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-links',
  templateUrl: './about-links.component.html',
  styleUrls: ['./about-links.component.scss']
})
export class AboutLinksComponent implements OnInit {
  faAddressCard = faAddressCard;
  faPhone = faPhone;
  faAt = faAt;
  faMapMarker = faMapMarker;
  faSignInAlt = faSignInAlt;
  faCalendarAlt = faCalendarAlt;
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
