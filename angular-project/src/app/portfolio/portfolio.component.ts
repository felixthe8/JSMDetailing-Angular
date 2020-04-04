import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/assets/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  portfolioImageList = [];
  portfolioHeader = 'JSM Portfolio';
  portfolioHeaderText = `This page shows images from our last few detailing jobs. We update this page every week
                              with new images, so check back soon!`;

  ngOnInit(): void {
    this.portfolioImageList = Portfolio.images;
  }

}
