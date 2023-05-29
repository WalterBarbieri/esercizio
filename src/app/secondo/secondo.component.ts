import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  ciao = 'ciao';
  comp = 'comp2'
  comp3 = 'comp3'
  constructor() { }

  ngOnInit(): void {
  }

}
