import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caresoul',
  templateUrl: './caresoul.component.html',
  styleUrls: ['./caresoul.component.scss']
})
export class CaresoulComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1200;
    // config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
