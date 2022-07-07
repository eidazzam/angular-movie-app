import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [TestService]
})
export class AboutComponent implements OnInit {

  constructor( public _TestService:TestService) {
    _TestService.printName();
   }

  ngOnInit(): void {
  }

}
